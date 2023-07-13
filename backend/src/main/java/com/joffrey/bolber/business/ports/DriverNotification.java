package com.joffrey.bolber.business.ports;

import com.joffrey.bolber.business.domain.messaging.DriverMessage;

public interface DriverNotification {
    void notify(DriverMessage driverMessage);
}
