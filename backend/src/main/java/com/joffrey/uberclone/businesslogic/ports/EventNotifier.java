package com.joffrey.uberclone.businesslogic.ports;

import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;

import java.util.UUID;

public interface EventNotifier {
    void notifyNewItinerary(UUID driverId, Itinerary newItinerary);
}
