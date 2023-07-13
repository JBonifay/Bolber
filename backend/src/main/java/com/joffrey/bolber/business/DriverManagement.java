package com.joffrey.bolber.business;

import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.domain.driver.DriverStatus;
import com.joffrey.bolber.business.domain.driver.NearestDriverLocator;

import java.util.ArrayList;
import java.util.List;

public class DriverManagement {

    private final List<Driver> drivers = new ArrayList<>();
    private final NearestDriverLocator nearestDriverLocator = new NearestDriverLocator();

    public void addDriver(Driver driver) {
        drivers.add(driver);
    }

    public void assignDriver(Booking booking) {
        Driver driver = nearestDriverLocator.findNearestDriverForBooking(drivers, booking.departure());
        booking.assignDriver(driver);
        driver.setDestinations(booking.departure(), booking.destination());
        driver.startRide();
    }

    public boolean anyDriverAvailable() {
        return drivers.stream().anyMatch(driver -> driver.status().equals(DriverStatus.WAITING_FOR_RIDE));
    }
}
