package com.joffrey.uberclone.businesslogic.domain.driver;

import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.domain.itinerary.ItineraryFinder;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.ports.EventNotifier;

import java.util.List;

public class DriverAssignment {
    private final EventNotifier eventNotifier;
    private final ItineraryFinder itineraryFinder;
    private final NearestDriverLocator nearestDriverLocator;

    public DriverAssignment(EventNotifier eventNotifier, ItineraryFinder itineraryFinder, NearestDriverLocator nearestDriverLocator) {
        this.eventNotifier = eventNotifier;
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
        eventNotifier.notifyNewItinerary(driver.id(), driver.actualItinerary());
    }

    public void driverArrivedToCustomer(Driver driver) {
        driver.driveToDestination(new Itinerary(List.of(
                new Coordinates(2, 2),
                new Coordinates(2, 1),
                new Coordinates(2, 0),
                new Coordinates(1, 0),
                new Coordinates(0, 0)
        )));
        eventNotifier.notifyNewItinerary(driver.id(), new Itinerary(List.of(
                new Coordinates(2, 2),
                new Coordinates(2, 1),
                new Coordinates(2, 0),
                new Coordinates(1, 0),
                new Coordinates(0, 0)
        )));
    }

}