package com.joffrey.bolber.business.domain.driver;

import com.joffrey.bolber.business.domain.map.Block;
import com.joffrey.bolber.business.domain.messaging.DriverMessage;
import com.joffrey.bolber.business.domain.pathfinding.PathFindingAlgorithm;
import com.joffrey.bolber.business.domain.simulation.SimulationProperties;
import com.joffrey.bolber.business.ports.DriverNotification;

import java.util.List;

import static com.joffrey.bolber.business.domain.driver.DriverStatus.DRIVING_TO_CUSTOMER;
import static com.joffrey.bolber.business.domain.driver.DriverStatus.DRIVING_TO_DESTINATION;

public class NavigationSystem {
    private final DriverNotification driverNotification;
    private final PathFindingAlgorithm pathFindingAlgorithm;
    private final SimulationProperties simulationProperties;
    private final Block[] map;
    private NavigationListener navigationListener;

    public NavigationSystem(SimulationProperties simulationProperties, DriverNotification driverNotification, PathFindingAlgorithm pathFindingAlgorithm, Block[] map) {
        this.driverNotification = driverNotification;
        this.pathFindingAlgorithm = pathFindingAlgorithm;
        this.simulationProperties = simulationProperties;
        this.map = map;
    }

    public void setNavigationListener(NavigationListener navigationListener) {
        this.navigationListener = navigationListener;
    }

    public void driveToCustomer(Coordinates actual, Coordinates customer) {
        drive(actual, customer, DRIVING_TO_CUSTOMER);
        navigationListener.onArrivedToCustomer();
    }

    public void driveToDestination(Coordinates actual, Coordinates destination) {
        drive(actual, destination, DRIVING_TO_DESTINATION);
        navigationListener.onArrivedToDestination();
    }

    private void drive(Coordinates actual, Coordinates destination, DriverStatus driverStatus) {
        Itinerary shortestItinerary = findShortestItinerary(actual, destination);
        for (int i = 0; i < shortestItinerary.coordinates().size(); i++) {
            navigationListener.onMove(shortestItinerary.coordinates().get(i));
            driverNotification.notify(new DriverMessage(driverStatus, shortestItinerary.coordinates().get(i)));
            simulationProperties.waitTimeBetweenDriverMovement();
        }
    }

    protected Itinerary findShortestItinerary(Coordinates startCoordinates, Coordinates endCoordinates) {
        List<Coordinates> shortestPath = pathFindingAlgorithm.findShortestPath(map, startCoordinates, endCoordinates);
        return new Itinerary(shortestPath);
    }
}
