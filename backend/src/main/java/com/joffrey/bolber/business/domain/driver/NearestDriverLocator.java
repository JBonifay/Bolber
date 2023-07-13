package com.joffrey.bolber.business.domain.driver;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Stream;

public class NearestDriverLocator {
    private final Logger logger = LoggerFactory.getLogger(getClass().getName());

    public Driver findNearestDriverForBooking(List<Driver> drivers, Coordinates departureCoordinates) {
        return findNearestDriverInStraightLine(departureCoordinates, drivers);
    }

    private Driver findNearestDriverInStraightLine(Coordinates customerCoordinates, List<Driver> drivers) {
        Driver nearest = nearest(customerCoordinates, onlyAvailableDrivers(drivers.stream()));
        logger.trace("Nearest is: " + nearest);
        return nearest;
    }

    private Driver nearest(Coordinates customerCoordinates, Stream<Driver> driverStream) {
        return driverStream.min(Comparator.comparingDouble(driver ->
                getStraightLineDistance(driver.currentCoordinates(), customerCoordinates)
        )).get();
    }

    private Stream<Driver> onlyAvailableDrivers(Stream<Driver> stream) {
        return stream.filter(driver -> driver.status().equals(DriverStatus.WAITING_FOR_RIDE));
    }

    private double getStraightLineDistance(Coordinates driverCoordinates, Coordinates customerCoordinates) {
        return Math.sqrt(
                Math.pow(customerCoordinates.horizontal() - driverCoordinates.horizontal(), 2)
                + Math.pow(customerCoordinates.vertical() - driverCoordinates.vertical(), 2));
    }

}
