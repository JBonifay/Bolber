package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.messaging.CustomerEventMessage;
import com.joffrey.bolber.business.ports.SimulationNotification;

import java.util.UUID;

import static com.joffrey.bolber.business.domain.messaging.SimulationEventType.PICKUP;

public class SimulationNotificationSpy implements SimulationNotification {
    private CustomerEventMessage customerEventMessage;

    public CustomerEventMessage previousNotification() {
        return customerEventMessage;
    }

    @Override
    public void notify(CustomerEventMessage customerEventMessage) {
        this.customerEventMessage = customerEventMessage;
    }
}
