package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.messaging.CustomerEventMessage;
import com.joffrey.bolber.business.ports.SimulationNotification;

public class SimulationNotificationStub implements SimulationNotification {
    @Override
    public void notify(CustomerEventMessage customerEventMessage) {
        
    }
}
