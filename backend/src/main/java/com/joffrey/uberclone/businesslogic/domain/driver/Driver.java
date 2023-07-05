package com.joffrey.uberclone.businesslogic.domain.driver;

import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.Objects;
import java.util.UUID;

import static com.joffrey.uberclone.businesslogic.domain.driver.DriverStatus.WAITING_FOR_RIDE;

public sealed class Driver permits NullDriver {
    private final UUID id;
    private final String fullName;
    private final Coordinates startingCoordinates;
    private DriverStatus status;
    private Itinerary actualItinerary;

    public Driver(UUID id, String fullName, Coordinates startingCoordinates) {
        this.id = id;
        this.fullName = fullName;
        this.startingCoordinates = startingCoordinates;
        status = DriverStatus.WAITING_FOR_RIDE;
    }

    public void driveToCustomer(Itinerary itineraryToCustomer) {
        status = DriverStatus.DRIVING_TO_CUSTOMER;
        this.actualItinerary = itineraryToCustomer;
    }

    public void driveToDestination(Itinerary itinerary) {
        status = DriverStatus.DRIVING_TO_DESTINATION;
        this.actualItinerary = itinerary;
    }

    public void arrivedToDestination() {
        status = WAITING_FOR_RIDE;
    }

    public UUID id() {
        return id;
    }

    public DriverStatus status() {
        return status;
    }

    public Coordinates startingCoordinates() {
        return startingCoordinates;
    }

    public Itinerary actualItinerary() {
        return actualItinerary;
    }

    public String fullName() {
        return fullName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Driver driver)) return false;

        if (!Objects.equals(id, driver.id)) return false;
        if (!Objects.equals(fullName, driver.fullName)) return false;
        if (!Objects.equals(startingCoordinates, driver.startingCoordinates))
            return false;
        if (status != driver.status) return false;
        return Objects.equals(actualItinerary, driver.actualItinerary);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (fullName != null ? fullName.hashCode() : 0);
        result = 31 * result + (startingCoordinates != null ? startingCoordinates.hashCode() : 0);
        result = 31 * result + (status != null ? status.hashCode() : 0);
        result = 31 * result + (actualItinerary != null ? actualItinerary.hashCode() : 0);
        return result;
    }
}
