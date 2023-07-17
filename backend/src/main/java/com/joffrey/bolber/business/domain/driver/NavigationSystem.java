package com.joffrey.bolber.business.domain.driver;

import com.joffrey.bolber.business.domain.map.Block;
import com.joffrey.bolber.business.domain.messaging.CustomerEventMessage;
import com.joffrey.bolber.business.domain.messaging.DriverMessage;
import com.joffrey.bolber.business.domain.pathfinding.PathFindingAlgorithm;
import com.joffrey.bolber.business.domain.simulation.SimulationProperties;
import com.joffrey.bolber.business.ports.DriverNotification;
import com.joffrey.bolber.business.ports.SimulationNotification;

import java.util.List;
import java.util.UUID;

import static com.joffrey.bolber.business.domain.driver.DriverStatus.DRIVING_TO_CUSTOMER;
import static com.joffrey.bolber.business.domain.driver.DriverStatus.DRIVING_TO_DESTINATION;
import static com.joffrey.bolber.business.domain.messaging.SimulationEventType.PICKUP;

public class NavigationSystem {
    private final DriverNotification driverNotification;
    private final SimulationNotification simulationNotification;
    private final PathFindingAlgorithm pathFindingAlgorithm;
    private final SimulationProperties simulationProperties;
    private final Block[] map;
    private NavigationListener navigationListener;

    public NavigationSystem(SimulationProperties simulationProperties,
                            DriverNotification driverNotification,
                            SimulationNotification simulationNotification,
                            PathFindingAlgorithm pathFindingAlgorithm,
                            Block[] map) {
        this.driverNotification = driverNotification;
        this.simulationNotification = simulationNotification;
        this.pathFindingAlgorithm = pathFindingAlgorithm;
        this.simulationProperties = simulationProperties;
        this.map = map;
    }

    public void setNavigationListener(NavigationListener navigationListener) {
        this.navigationListener = navigationListener;
    }

    public void driveToCustomer(UUID driverId, Coordinates actual, Coordinates customer) {
        drive(driverId, actual, customer, DRIVING_TO_CUSTOMER);
        navigationListener.onArrivedToCustomer();
        simulationNotification.notify(new CustomerEventMessage(driverId, PICKUP));
    }

    public void driveToDestination(UUID driverId, Coordinates actual, Coordinates destination) {
        drive(driverId, actual, destination, DRIVING_TO_DESTINATION);
        navigationListener.onArrivedToDestination();
    }

    private void drive(UUID driverId, Coordinates actual, Coordinates destination, DriverStatus driverStatus) {
        Itinerary shortestItinerary = findShortestItinerary(actual, destination);
        for (int i = 0; i < shortestItinerary.coordinates().size(); i++) {
            navigationListener.onMove(shortestItinerary.coordinates().get(i));
            driverNotification.notify(new DriverMessage(driverId, driverStatus, shortestItinerary.coordinates().get(i)));
            simulationProperties.waitTimeBetweenDriverMovement();
        }
    }

    protected Itinerary findShortestItinerary(Coordinates startCoordinates, Coordinates endCoordinates) {
        List<Coordinates> shortestPath = pathFindingAlgorithm.findShortestPath(map, startCoordinates, endCoordinates);
        return new Itinerary(shortestPath);
    }
}
