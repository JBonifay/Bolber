package com.joffrey.uberclone.testdouble;

import com.joffrey.uberclone.businesslogic.domain.booking.RandomBookingProperties;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.UUID;

public class RandomBookingPropertiesSpy extends RandomBookingProperties {
    private UUID previousUuid;
    private String previousName;
    private Coordinates previousDeparture;
    private Coordinates previousDestination;

    public UUID previousUuid() {
        return previousUuid;
    }

    public String previousName() {
        return previousName;
    }

    public Coordinates previousDeparture() {
        return previousDeparture;
    }

    public Coordinates previousDestination() {
        return previousDestination;
    }

    @Override
    public UUID nextUuid() {
        UUID uuid = super.nextUuid();
        previousUuid = uuid;
        return uuid;
    }

    @Override
    public String nextName() {
        String name = super.nextName();
        previousName = name;
        return previousName;
    }

    @Override
    public Coordinates nextDeparture() {
        Coordinates departure = super.nextDeparture();
        previousDeparture = departure;
        return previousDeparture;
    }

    @Override
    public Coordinates nextDestination() {
        Coordinates destination = super.nextDestination();
        previousDestination = destination;
        return destination;
    }
}
