package com.joffrey.uberclone.integration.adapters.primary;

import com.joffrey.uberclone.adapters.primary.springboot.SpringDriverEventReceiver;
import com.joffrey.uberclone.businesslogic.domain.notification.DriverEventMessage;
import com.joffrey.uberclone.businesslogic.domain.notification.EventType;
import com.joffrey.uberclone.integration.adapters.AbstractIntegrationTest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandler;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;

import java.lang.reflect.Type;
import java.util.UUID;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.awaitility.Awaitility.await;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class SpringDriverEventReceiverTest extends AbstractIntegrationTest {

    @LocalServerPort
    private int port;
    @SpyBean
    private SpringDriverEventReceiver springDriverEventReceiver;
    private StompSession stompSession;

    @BeforeEach
    void setUp() throws ExecutionException, InterruptedException, TimeoutException {
        doNothing().when(springDriverEventReceiver).handle(any(), any());
        WebSocketStompClient stompClient = new WebSocketStompClient(new StandardWebSocketClient());
        stompClient.setMessageConverter(new MappingJackson2MessageConverter());
        stompSession = stompClient.connectAsync("ws://localhost:" + port + "/socket", new StompSessionHandlerAdapter() {
        }).get(1, SECONDS);
    }

    @Test
    void should_receive_driver_event_from_socket() {
        DriverEventMessage eventMessage = sendDriverEvent();

        assertMessageWasReceived(eventMessage);
    }

    private DriverEventMessage sendDriverEvent() {
        DriverEventMessage eventMessage = new DriverEventMessage(UUID.randomUUID(), EventType.ARRIVED_TO_CUSTOMER);
        stompSession.send("/driver-event", eventMessage);
        return eventMessage;
    }

    private void assertMessageWasReceived(DriverEventMessage eventMessage) {
        verify(springDriverEventReceiver, timeout(1000)).receiveMessage(eventMessage);
    }

}