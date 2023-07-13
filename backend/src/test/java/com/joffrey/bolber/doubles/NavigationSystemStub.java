package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Itinerary;
import com.joffrey.bolber.business.domain.driver.NavigationSystem;
import com.joffrey.bolber.business.domain.simulation.SimulationProperties;
import com.joffrey.bolber.business.ports.DriverNotification;

import java.util.List;

public class NavigationSystemStub extends NavigationSystem {

    public NavigationSystemStub(SimulationProperties simulationProperties, DriverNotification driverNotification) {
        super(simulationProperties, driverNotification, null, null);
    }

    @Override
    public void driveToCustomer(Coordinates actual, Coordinates customer) {

    }

    @Override
    protected Itinerary findShortestItinerary(Coordinates startCoordinates, Coordinates endCoordinates) {
        return new Itinerary(List.of());
    }
}
