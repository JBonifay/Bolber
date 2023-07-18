package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Itinerary;
import com.joffrey.bolber.business.domain.driver.NavigationSystem;
import com.joffrey.bolber.business.domain.map.Block;
import com.joffrey.bolber.business.domain.simulation.FakeSimulationProperties;

import java.util.List;
import java.util.UUID;

public class NavigationSystemStub extends NavigationSystem {

    public NavigationSystemStub() {
        super(new FakeSimulationProperties(), new DriverNotificationStub(), new SimulationNotificationStub(), new PathFindingAlgorithmStub(), new Block[]{});
    }

    @Override
    public void driveToCustomer(UUID driverId, Coordinates actual, Coordinates customer) {
        super.driveToCustomer(driverId, actual, customer);
    }

    @Override
    protected Itinerary findShortestItinerary(Coordinates startCoordinates, Coordinates endCoordinates) {
        return new Itinerary(List.of());
    }
}
