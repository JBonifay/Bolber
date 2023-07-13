package com.joffrey.bolber.integration;

import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.DriverMessage;
import com.joffrey.bolber.business.domain.driver.DriverStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.simp.stomp.StompFrameHandler;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.awaitility.Awaitility.await;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ActiveProfiles("integration-test")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class DriverControllerIT {

    @Value("${local.server.port}")
    private int port;
    @Autowired
    private BookingManagement bookingManagement;
    private WebSocketStompClient stompClient;
    private List<DriverMessage> receivedMessages;

    @BeforeEach
    public void setup() {
        receivedMessages = new ArrayList<>();
        stompClient = new WebSocketStompClient(new StandardWebSocketClient());
        stompClient.setMessageConverter(new MappingJackson2MessageConverter());
    }

    @Test
    void should_receive_drivers_notification_at_each_driver_movement() throws ExecutionException, InterruptedException, TimeoutException {
        subscribingToDriverTopic(stompClient);
        bookingManagement.handle(new Booking(new Coordinates(0, 2), null));

        await()
                .atMost(3, SECONDS)
                .untilAsserted(() -> {
                            assertEquals(new DriverMessage(DriverStatus.DRIVING_TO_CUSTOMER, new Coordinates(0, 0)),
                                    receivedMessages.get(0));
                            assertEquals(new DriverMessage(DriverStatus.DRIVING_TO_CUSTOMER, new Coordinates(0, 1)),
                                    receivedMessages.get(1));
                            assertEquals(new DriverMessage(DriverStatus.DRIVING_TO_CUSTOMER, new Coordinates(0, 2)),
                                    receivedMessages.get(2));
                        }
                );
    }

    private void subscribingToDriverTopic(WebSocketStompClient stompClient) throws InterruptedException, ExecutionException, TimeoutException {
        StompSession stompSession = stompClient.connectAsync("ws://localhost:" + port + "/socket", new StompSessionHandlerAdapter() {
        }).get(1, SECONDS);

        stompSession.subscribe("/topic/drivers", new StompFrameHandler() {
            @Override
            public Type getPayloadType(StompHeaders stompHeaders) {
                return DriverMessage.class;
            }

            @Override
            public void handleFrame(StompHeaders stompHeaders, Object o) {
                receivedMessages.add((DriverMessage) o);
            }
        });
    }

}