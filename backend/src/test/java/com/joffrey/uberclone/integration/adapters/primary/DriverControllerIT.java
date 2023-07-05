package com.joffrey.uberclone.integration.adapters.primary;

import com.joffrey.uberclone.adapters.primary.springboot.DriverMessage;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.integration.adapters.AbstractIntegrationTest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.stomp.StompFrameHandler;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;

import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.awaitility.Awaitility.await;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;


class DriverControllerIT extends AbstractIntegrationTest {

    @Value("${local.server.port}")
    private int port;
    private CompletableFuture<DriverMessage[]> completableFuture;
    private WebSocketStompClient stompClient;

    @BeforeEach
    public void setup() {
        completableFuture = new CompletableFuture<>();
        stompClient = new WebSocketStompClient(new StandardWebSocketClient());
        stompClient.setMessageConverter(new MappingJackson2MessageConverter());
    }

    @Test
    public void should_receive_drivers_when_subscribing() throws InterruptedException, ExecutionException, TimeoutException {
        subscribingToDriversTopic(stompClient);

        DriverMessage[] driverMessage = completableFuture.get(1, SECONDS);

        assertInitialDriversWasReceived(driverMessage);
    }

    private void subscribingToDriversTopic(WebSocketStompClient stompClient) throws InterruptedException, ExecutionException, TimeoutException {
        StompSession stompSession = stompClient.connectAsync("ws://localhost:" + port + "/socket", new StompSessionHandlerAdapter() {
        }).get(1, SECONDS);

        stompSession.subscribe("/topic/drivers", new StompFrameHandler() {
            @Override
            public Type getPayloadType(StompHeaders stompHeaders) {
                return DriverMessage[].class;
            }

            @Override
            public void handleFrame(StompHeaders stompHeaders, Object o) {
                System.out.println("Received : " + Arrays.toString((DriverMessage[]) o));
                completableFuture.complete((DriverMessage[]) o);
            }
        });
    }

    private void assertInitialDriversWasReceived(DriverMessage[] driverMessage) {
        assertArrayEquals(
                new DriverMessage[]{
                        new DriverMessage(UUID.fromString("4a2941b4-c4fb-43eb-b74c-c3d93f313255"), "Robert Plant", new Coordinates(0, 0)),
                        new DriverMessage(UUID.fromString("903ecee0-f433-4994-9644-c0a8cee9d05e"), "Henry Dufour", new Coordinates(10, 10)),
                        new DriverMessage(UUID.fromString("b53ddb6b-0a58-46f9-9ca0-cdbcc8d2b8ff"), "Marta Blav", new Coordinates(5, 20)),
                        new DriverMessage(UUID.fromString("275eedc2-bec9-4d62-b90b-f1289b8e2465"), "Yanis Boucji", new Coordinates(40, 40)),
                        new DriverMessage(UUID.fromString("0702206b-72ef-4c3e-b832-0c15fc5123a3"), "Jérome Arp", new Coordinates(34, 45))},
                driverMessage
        );
    }


}