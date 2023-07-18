package com.joffrey.bolber.business.domain.driver;

import com.joffrey.bolber.business.domain.booking.Booking;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.UUID;

import static com.joffrey.bolber.business.domain.driver.DriverStatus.*;

public class Driver implements NavigationListener {
    private final Logger logger = LoggerFactory.getLogger(getClass().getName());
    private final String driverName;
    private final NavigationSystem navigationSystem;
    private final UUID driverId;
    private Coordinates currentCoordinates;
    private DriverStatus status = WAITING_FOR_RIDE;
    private Coordinates pickupPoint;
    private Coordinates destination;
    private UUID customerId;

    public Driver(UUID driverId, String driverName, Coordinates currentCoordinates, NavigationSystem navigationSystem) {
        this.driverId = driverId;
        this.driverName = driverName;
        this.currentCoordinates = currentCoordinates;
        this.navigationSystem = navigationSystem;
        this.navigationSystem.setNavigationListener(this);
    }

    public void setRideInfo(Booking booking) {
        this.customerId = booking.customerId();
        this.pickupPoint = booking.departure();
        this.destination = booking.destination();
    }

    public void startRide() {
        logger.info("Driver " + driverName + " is driving to customer.");
        updateStatus(DRIVING_TO_CUSTOMER);
        navigationSystem.driveToCustomer(driverId, currentCoordinates, pickupPoint);
    }

    public Coordinates currentCoordinates() {
        return currentCoordinates;
    }

    protected void updateStatus(DriverStatus driverStatus) {
        status = driverStatus;
    }

    public DriverStatus status() {
        return status;
    }

    public UUID driverId() {
        return driverId;
    }

    @Override
    public void onArrivedToCustomer() {
        logger.info("Driver " + driverName + " is driving to destination.");
        updateStatus(DRIVING_TO_DESTINATION);
        navigationSystem.driveToDestination(driverId, customerId, currentCoordinates, destination);
    }

    @Override
    public void onArrivedToDestination() {
        logger.info("Driver " + driverName + " finished the ride.");
        updateStatus(WAITING_FOR_RIDE);
    }

    @Override
    public void onMove(Coordinates coordinates) {
        currentCoordinates = coordinates;
    }


    @Override
    public String toString() {
        return "Driver[" +
               "driverName=" + driverName + ", " +
               "currentCoordinates=" + currentCoordinates + ']';
    }
}
