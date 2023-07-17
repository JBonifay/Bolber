package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.messaging.CustomerMessage;
import com.joffrey.bolber.business.ports.CustomerNotification;

public class CustomerNotificationSpy implements CustomerNotification {
    private CustomerMessage previousMessage;

    
    
    public CustomerMessage previousNotification() {
        return previousMessage;
    }

    @Override
    public void notify(CustomerMessage customerMessage) {
        previousMessage = customerMessage;
    }
}
