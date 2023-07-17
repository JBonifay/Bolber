package com.joffrey.bolber.adapters.secondary;

import com.joffrey.bolber.business.domain.messaging.CustomerMessage;
import com.joffrey.bolber.business.ports.CustomerNotification;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;


@Component
public class SpringCustomerNotification implements CustomerNotification {
    private final Logger logger = LoggerFactory.getLogger(getClass().getName());
    private final SimpMessagingTemplate simpMessagingTemplate;

    public SpringCustomerNotification(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @Override
    public void notify(CustomerMessage customerMessage) {
        simpMessagingTemplate.convertAndSend("/topic/customers", customerMessage);
    }
}
