package com.joffrey.bolber.business.ports;

import com.joffrey.bolber.business.domain.driver.DriverMessage;

public interface DriverNotification {
    void notify(DriverMessage driverMessage);
}
