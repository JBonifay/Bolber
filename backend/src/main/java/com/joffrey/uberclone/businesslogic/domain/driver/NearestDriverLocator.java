package com.joffrey.uberclone.businesslogic.domain.driver;

import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

public class NearestDriverLocator {
    Optional<Driver> findNearestDriverForBooking(Booking booking, List<Driver> drivers) {
        return findNearestDriverInStraightLine(booking.departure(), drivers);
    }

    private Optional<Driver> findNearestDriverInStraightLine(Coordinates customerCoordinates, List<Driver> drivers) {
        return sortDrivers(customerCoordinates, drivers).findFirst();
    }

    private Stream<Driver> sortDrivers(Coordinates customerCoordinates, List<Driver> drivers) {
        return drivers.stream()
                .filter(driver -> driver.status() == DriverStatus.WAITING_FOR_RIDE)
                .sorted(Comparator.comparingDouble(driver ->
                        getStraightLineDistance(driver.startingCoordinates(), customerCoordinates)
                ));
    }

    private double getStraightLineDistance(Coordinates driverCoordinates, Coordinates customerCoordinates) {
        return Math.sqrt(
                Math.pow(customerCoordinates.horizontal() - driverCoordinates.horizontal(), 2)
                + Math.pow(customerCoordinates.vertical() - driverCoordinates.vertical(), 2));
    }

}
