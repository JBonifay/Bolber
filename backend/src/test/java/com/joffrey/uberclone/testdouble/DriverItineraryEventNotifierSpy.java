package com.joffrey.uberclone.testdouble;

import com.joffrey.uberclone.businesslogic.domain.notification.DriverItineraryUpdateMessage;
import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.ports.DriverItineraryEventNotifier;

import java.util.UUID;

public class DriverItineraryEventNotifierSpy implements DriverItineraryEventNotifier {

    private DriverItineraryUpdateMessage driverItineraryUpdateMessage;

    public DriverItineraryUpdateMessage previousMessageSent() {
        return driverItineraryUpdateMessage;
    }

    @Override
    public void notifyNewItinerary(UUID driverId, Itinerary newItinerary) {
        driverItineraryUpdateMessage = new DriverItineraryUpdateMessage(driverId, newItinerary);
    }
}
