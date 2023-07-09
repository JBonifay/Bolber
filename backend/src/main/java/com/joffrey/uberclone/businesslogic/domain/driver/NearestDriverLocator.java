package com.joffrey.uberclone.businesslogic.domain.driver;

import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public class NearestDriverLocator {
    private final Logger logger = LoggerFactory.getLogger(getClass().getName());

    Optional<Driver> findNearestDriverForBooking(Booking booking, List<Driver> drivers) {
        logger.info("Finding the nearest driver.");
        return findNearestDriverInStraightLine(booking.departure(), drivers);
    }

    private Optional<Driver> findNearestDriverInStraightLine(Coordinates customerCoordinates, List<Driver> drivers) {
        Optional<Driver> nearest = nearest(customerCoordinates, onlyAvailableDrivers(drivers.stream()));
        logger.info("Nearest is: " + nearest);
        return nearest;
    }

    private Optional<Driver> nearest(Coordinates customerCoordinates, Stream<Driver> driverStream) {
        return driverStream.min(Comparator.comparingDouble(driver ->
                getStraightLineDistance(driver.startingCoordinates(), customerCoordinates)
        ));
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
