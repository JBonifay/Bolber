package com.joffrey.uberclone.adapters.secondary;

import com.joffrey.uberclone.businesslogic.domain.notification.DriverUpdateMessage;
import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.ports.EventNotifier;

import java.util.UUID;

public class EventNotifierStub implements EventNotifier {

    private DriverUpdateMessage driverUpdateMessage;

    public DriverUpdateMessage previousMessageSent() {
        return driverUpdateMessage;
    }

    @Override
    public void notifyNewItinerary(UUID driverId, Itinerary newItinerary) {
        driverUpdateMessage = new DriverUpdateMessage(driverId, newItinerary);
    }
}
