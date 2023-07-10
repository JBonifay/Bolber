package com.joffrey.uberclone.businesslogic.domain.itinerary;

import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public record Itinerary(List<Coordinates> coordinates) {


    public static class ItineraryBuilder {
        private final List<Coordinates> itinerary = new ArrayList<>();

        public ItineraryBuilder addStep(Coordinates coordinates) {
            this.itinerary.add(coordinates);
            return this;
        }

        public Itinerary build() {
            return new Itinerary(Collections.unmodifiableList(this.itinerary));
        }
        
    }
}
