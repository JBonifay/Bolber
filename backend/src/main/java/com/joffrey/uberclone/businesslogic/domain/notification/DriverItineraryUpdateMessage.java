package com.joffrey.uberclone.businesslogic.domain.notification;

import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;

import java.util.UUID;

public record DriverItineraryUpdateMessage(UUID driverId, Itinerary newItinerary) {
    
}
