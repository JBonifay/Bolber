package com.joffrey.uberclone.businesslogic.domain.notification;

import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.UUID;

public record DriverMessage(
        UUID driverId,
        String driverName,
        Coordinates startingCoordinates,
        Itinerary actualItinerary
) {

}