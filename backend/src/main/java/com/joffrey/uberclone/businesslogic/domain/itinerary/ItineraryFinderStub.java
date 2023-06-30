package com.joffrey.uberclone.businesslogic.domain.itinerary;

import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

public class ItineraryFinderStub implements ItineraryFinder {

    private Itinerary itinerary;

    public void setItinerary(Itinerary itinerary) {
        this.itinerary = itinerary;
    }

    @Override
    public Itinerary findShortestItinerary(Coordinates startCoordinates, Coordinates endCoordinates) {
        return itinerary;
    }
}
