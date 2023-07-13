package com.joffrey.bolber.business.domain.driver;

import static com.joffrey.bolber.business.domain.driver.DriverStatus.*;

public class Driver implements NavigationListener {
    private final String driverName;
    private final NavigationSystem navigationSystem;
    private Coordinates currentCoordinates;
    private DriverStatus status = WAITING_FOR_RIDE;
    private Coordinates customer;
    private Coordinates destination;

    public Driver(String driverName, Coordinates currentCoordinates, NavigationSystem navigationSystem) {
        this.driverName = driverName;
        this.currentCoordinates = currentCoordinates;
        this.navigationSystem = navigationSystem;
        this.navigationSystem.setNavigationListener(this);
    }

    public void setDestinations(Coordinates customer, Coordinates destination) {
        this.customer = customer;
        this.destination = destination;
    }

    public void startRide() {
        updateStatus(DRIVING_TO_CUSTOMER);
        navigationSystem.driveToCustomer(currentCoordinates, customer);
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

    @Override
    public void onArrivedToCustomer() {
        updateStatus(DRIVING_TO_DESTINATION);
        navigationSystem.driveToDestination(customer, destination);
    }

    @Override
    public void onArrivedToDestination() {
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
