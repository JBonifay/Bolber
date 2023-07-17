package com.joffrey.bolber.business.ports;

import com.joffrey.bolber.business.domain.messaging.CustomerMessage;

public interface CustomerNotification {
    void notify(CustomerMessage customerMessage);
}
