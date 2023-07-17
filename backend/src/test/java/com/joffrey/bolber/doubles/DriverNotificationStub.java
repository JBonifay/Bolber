package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.messaging.DriverMessage;
import com.joffrey.bolber.business.ports.DriverNotification;

public class DriverNotificationStub implements DriverNotification {
    @Override
    public void notify(DriverMessage driverMessage) {
        
    }
}
