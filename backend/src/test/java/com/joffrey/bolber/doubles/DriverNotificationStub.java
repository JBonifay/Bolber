package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.messaging.DriverMessage;
import com.joffrey.bolber.business.ports.DriverNotification;

import java.util.ArrayList;
import java.util.List;

public class DriverNotificationStub implements DriverNotification {
    
    private final List<DriverMessage> driverMessages = new ArrayList<>();
    
    @Override
    public void notify(DriverMessage driverMessage) {
        this.driverMessages.add(driverMessage);
    }

    public List<DriverMessage> receivedMessages() {
        return driverMessages;
    }
}
