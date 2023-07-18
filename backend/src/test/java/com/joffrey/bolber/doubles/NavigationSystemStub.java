package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Itinerary;
import com.joffrey.bolber.business.domain.driver.NavigationSystem;
import com.joffrey.bolber.business.domain.simulation.SimulationProperties;
import com.joffrey.bolber.business.ports.DriverNotification;

import java.util.List;
import java.util.UUID;

public class NavigationSystemStub extends NavigationSystem {

    public NavigationSystemStub() {
        super(null, null, null, null, null);
    }

    public NavigationSystemStub(SimulationProperties simulationProperties, DriverNotification driverNotification) {
        super(simulationProperties, driverNotification, null, null, null);
    }

    @Override
    public void driveToCustomer(UUID driverId, UUID customerId, Coordinates actual, Coordinates customer) {

    }

    @Override
    protected Itinerary findShortestItinerary(Coordinates startCoordinates, Coordinates endCoordinates) {
        return new Itinerary(List.of());
    }
}
