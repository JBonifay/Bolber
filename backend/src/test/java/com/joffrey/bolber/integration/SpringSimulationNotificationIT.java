package com.joffrey.bolber.integration;

import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.messaging.CustomerEventMessage;
import com.joffrey.bolber.business.domain.messaging.CustomerMessage;
import com.joffrey.bolber.business.domain.messaging.SimulationEventType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.simp.stomp.StompFrameHandler;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.awaitility.Awaitility.await;
import static org.junit.jupiter.api.Assertions.assertEquals;

class SpringSimulationNotificationIT extends AbstractIntegrationTest {

    @Value("${local.server.port}")
    private int port;
    @Autowired
    private BookingManagement bookingManagement;
    private WebSocketStompClient stompClient;
    private List<CustomerEventMessage> receivedMessages;

    @BeforeEach
    public void setup() {
        receivedMessages = new ArrayList<>();
        stompClient = new WebSocketStompClient(new StandardWebSocketClient());
        stompClient.setMessageConverter(new MappingJackson2MessageConverter());
    }

    @Test
    void should_receive_customer_pickup_event_notification_when_driver_pickup_customer() throws ExecutionException, InterruptedException, TimeoutException {
        subscribingToCustomerEventTopic(stompClient);
        bookingManagement.handle(new Booking(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), new Coordinates(0, 2), null));

        await()
                .atMost(3, SECONDS)
                .untilAsserted(() -> {
                            assertEquals(new CustomerEventMessage(
                                    UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"),
                                    SimulationEventType.PICKUP
                            ), receivedMessages.get(0));
                        }
                );
    }

    private void subscribingToCustomerEventTopic(WebSocketStompClient stompClient) throws InterruptedException, ExecutionException, TimeoutException {
        StompSession stompSession = stompClient.connectAsync("ws://localhost:" + port + "/socket", new StompSessionHandlerAdapter() {
        }).get(1, SECONDS);

        stompSession.subscribe("/topic/customer-event", new StompFrameHandler() {
            @Override
            public Type getPayloadType(StompHeaders stompHeaders) {
                return CustomerEventMessage.class;
            }

            @Override
            public void handleFrame(StompHeaders stompHeaders, Object o) {
                receivedMessages.add((CustomerEventMessage) o);
            }
        });
    }
}