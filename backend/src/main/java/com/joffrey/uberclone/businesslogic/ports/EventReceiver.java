package com.joffrey.uberclone.businesslogic.ports;

import com.joffrey.uberclone.businesslogic.domain.notification.EventType;

import java.util.UUID;

public interface EventReceiver {
    void receive(UUID driverId, EventType arrivedToCustomer);
}
