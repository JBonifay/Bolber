package com.joffrey.uberclone.businesslogic.domain.driver;

import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.domain.itinerary.ItineraryFinder;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.ports.DriverItineraryEventNotifier;

import java.util.List;

public class DriverAssignment {
    private final DriverItineraryEventNotifier driverItineraryEventNotifier;
    private final ItineraryFinder itineraryFinder;
    private final NearestDriverLocator nearestDriverLocator;

    public DriverAssignment(DriverItineraryEventNotifier driverItineraryEventNotifier, ItineraryFinder itineraryFinder, NearestDriverLocator nearestDriverLocator) {
        this.driverItineraryEventNotifier = driverItineraryEventNotifier;
        this.itineraryFinder = itineraryFinder;
        this.nearestDriverLocator = nearestDriverLocator;
    }

    public void assignBookingToClosestDriver(Booking booking, List<Driver> drivers) {
        nearestDriverLocator.findNearestDriverForBooking(booking, drivers)
                .ifPresent(driver -> {
                    assignDriverToBooking(booking, driver);
                    setDriverNewItinerary(booking, driver);
                    notifyNewItinerary(driver);
                });
    }

    private void assignDriverToBooking(Booking booking, Driver driver) {
        booking.setAssignedDriver(driver);
    }

    private void setDriverNewItinerary(Booking booking, Driver driver) {
        driver.driveToCustomer(itineraryFinder.findShortestItinerary(driver.startingCoordinates(), booking.departure()));
    }

    private void notifyNewItinerary(Driver driver) {
        driverItineraryEventNotifier.notifyNewItinerary(driver.id(), driver.actualItinerary());
    }

    public void driverArrivedToCustomer(Driver driver) {
        driver.driveToDestination(new Itinerary(List.of(
                new Coordinates(2, 2),
                new Coordinates(2, 1),
                new Coordinates(2, 0),
                new Coordinates(1, 0),
                new Coordinates(0, 0)
        )));
        driverItineraryEventNotifier.notifyNewItinerary(driver.id(), new Itinerary(List.of(
                new Coordinates(2, 2),
                new Coordinates(2, 1),
                new Coordinates(2, 0),
                new Coordinates(1, 0),
                new Coordinates(0, 0)
        )));
    }

}