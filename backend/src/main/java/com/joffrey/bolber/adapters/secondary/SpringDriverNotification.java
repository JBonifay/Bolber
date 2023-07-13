package com.joffrey.bolber.adapters.secondary;

import com.joffrey.bolber.business.domain.messaging.DriverMessage;
import com.joffrey.bolber.business.ports.DriverNotification;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class SpringDriverNotification implements DriverNotification {

    private final Logger logger = LoggerFactory.getLogger(getClass().getName());
    private final SimpMessagingTemplate simpMessagingTemplate;

    public SpringDriverNotification(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @Override
    public void notify(DriverMessage driverMessage) {
        logger.trace("Sending message: " + driverMessage);
        simpMessagingTemplate.convertAndSend("/topic/drivers", driverMessage);
    }
}
