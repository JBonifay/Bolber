package com.joffrey.uberclone.businesslogic.domain.itinerary;

import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

public interface ItineraryFinder {
    Itinerary findShortestItinerary(Coordinates startCoordinates, Coordinates endCoordinates);
}
