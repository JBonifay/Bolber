package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.messaging.CustomerMessage;
import com.joffrey.bolber.business.ports.CustomerNotification;

public class CustomerNotificationStub implements CustomerNotification {
    @Override
    public void notify(CustomerMessage customerMessage) {
        
    }
}
