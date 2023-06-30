package com.joffrey.uberclone.businesslogic.domain.notification;

import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;

import java.util.UUID;

public record DriverUpdateMessage(UUID driverId, Itinerary newItinerary) {
    
}
