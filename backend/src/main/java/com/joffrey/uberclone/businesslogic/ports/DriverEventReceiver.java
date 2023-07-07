package com.joffrey.uberclone.businesslogic.ports;

import com.joffrey.uberclone.businesslogic.domain.notification.EventType;

import java.util.UUID;

public interface DriverEventReceiver {
    void handle(UUID driverId, EventType arrivedToCustomer);
}
