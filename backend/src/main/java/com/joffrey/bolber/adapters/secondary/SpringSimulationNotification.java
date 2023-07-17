package com.joffrey.bolber.adapters.secondary;

import com.joffrey.bolber.business.domain.messaging.CustomerEventMessage;
import com.joffrey.bolber.business.domain.messaging.SimulationEventType;
import com.joffrey.bolber.business.ports.SimulationNotification;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class SpringSimulationNotification implements SimulationNotification {

    private final Logger logger = LoggerFactory.getLogger(getClass().getName());
    private final SimpMessagingTemplate simpMessagingTemplate;

    public SpringSimulationNotification(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @Override
    public void notify(CustomerEventMessage customerEventMessage) {
        simpMessagingTemplate.convertAndSend("/topic/customer-event", customerEventMessage);

    }

}
