package com.joffrey.uberclone.integration.adapters.primary;

import com.joffrey.uberclone.adapters.primary.springboot.SpringDriverItineraryEventNotifier;
import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.domain.notification.DriverItineraryUpdateMessage;
import com.joffrey.uberclone.integration.adapters.AbstractIntegrationTest;
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
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.awaitility.Awaitility.await;
import static org.junit.jupiter.api.Assertions.assertEquals;

class SpringDriverItineraryEventNotifierTest extends AbstractIntegrationTest {
    public static final String TOPIC_DRIVERS_ITINERARY = "/topic/drivers-itinerary";
    @Value("${local.server.port}")
    private int port;
    @Autowired
    private SpringDriverItineraryEventNotifier springDriverItineraryEventNotifier;
    private final CompletableFuture<DriverItineraryUpdateMessage> completableFuture = new CompletableFuture<>();
    private StompSession stompSession;

    @BeforeEach
    public void setup() throws ExecutionException, InterruptedException, TimeoutException {
        WebSocketStompClient stompClient = new WebSocketStompClient(new StandardWebSocketClient());
        stompClient.setMessageConverter(new MappingJackson2MessageConverter());
        stompSession = stompClient.connectAsync("ws://localhost:" + port + "/socket", new StompSessionHandlerAdapter() {
        }).get(1, SECONDS);
    }

    @Test
    void should_notify_when_a_new_itinerary_is_added_to_driver() throws ExecutionException, InterruptedException, TimeoutException {
        subscribeToDriversItineraryTopic();

        sendDriverItineraryUpdateMessage();

        DriverItineraryUpdateMessage driverMessage = completableFuture.get(5, SECONDS);

        assertNotificationWasReceived(driverMessage);
    }

    private void subscribeToDriversItineraryTopic() {
        stompSession.subscribe(TOPIC_DRIVERS_ITINERARY, new StompFrameHandler() {
            @Override
            public Type getPayloadType(StompHeaders stompHeaders) {
                System.out.println("Get type");
                return DriverItineraryUpdateMessage.class;
            }

            @Override
            public void handleFrame(StompHeaders stompHeaders, Object o) {
                System.out.println("Handle frame " + o);
                completableFuture.complete((DriverItineraryUpdateMessage) o);
            }
        });
    }

    private void sendDriverItineraryUpdateMessage() {
        springDriverItineraryEventNotifier.notifyNewItinerary(UUID.fromString("4a2941b4-c4fb-43eb-b74c-c3d93f313255"),
                new Itinerary(List.of(
                        new Coordinates(2, 2),
                        new Coordinates(2, 1),
                        new Coordinates(2, 0),
                        new Coordinates(1, 0),
                        new Coordinates(0, 0)
                )));
    }

    private void assertNotificationWasReceived(DriverItineraryUpdateMessage driverMessage) {
        await()
                .atMost(1, SECONDS)
                .untilAsserted(() ->
                        assertEquals(new DriverItineraryUpdateMessage(UUID.fromString("4a2941b4-c4fb-43eb-b74c-c3d93f313255"),
                                        new Itinerary(List.of(
                                                new Coordinates(2, 2),
                                                new Coordinates(2, 1),
                                                new Coordinates(2, 0),
                                                new Coordinates(1, 0),
                                                new Coordinates(0, 0)
                                        ))),
                                driverMessage
                        ));
    }
}