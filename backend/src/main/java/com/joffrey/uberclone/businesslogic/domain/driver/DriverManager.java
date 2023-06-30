package com.joffrey.uberclone.businesslogic.domain.driver;

import com.joffrey.uberclone.businesslogic.domain.booking.Booking;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class DriverManager {
    private final List<Driver> drivers = new ArrayList<>();
    private final DriverAssignment driverAssignment;

    public DriverManager(DriverAssignment driverAssignment) {
        this.driverAssignment = driverAssignment;
    }

    public void addDriver(Driver driver) {
        drivers.add(driver);
    }

    public void assignToClosestDriver(Booking booking) {
        driverAssignment.assignBookingToClosestDriver(booking, drivers);
    }

    public void driverArrivedToCustomer(UUID driverId) {
        drivers.stream()
                .filter(driver -> driver.id().equals(driverId))
                .findFirst()
                .ifPresent(driverAssignment::driverArrivedToCustomer);
    }

    public void driverArrivedToDestination() {
        drivers.get(0).arrivedToDestination();
    }
}
