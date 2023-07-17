package com.joffrey.bolber.business.ports;

import com.joffrey.bolber.business.domain.messaging.CustomerEventMessage;

public interface SimulationNotification {
    void notify(CustomerEventMessage customerEventMessage);
}
