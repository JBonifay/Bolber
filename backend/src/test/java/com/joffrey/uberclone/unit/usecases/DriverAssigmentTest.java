package com.joffrey.uberclone.unit.usecases;

import com.joffrey.uberclone.businesslogic.domain.driver.Driver;
import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class DriverAssigmentTest extends BookingManagementTest {

    @Test
    void should_assign_closest_driver_to_booking_one_driver() {
        Driver closestDriver = aDriverIsPresent("Albert", new Coordinates(10, 10));

        aBookingIsReceived();

        assertEquals(closestDriver, bookingRepository.bookings().get(0).driver());
    }

    @Test
    void should_assign_closest_driver_to_booking_two_driver() {
        aDriverIsPresent("Albert", new Coordinates(10, 10));
        Driver closestDriver = aDriverIsPresent("Heber", new Coordinates(1, 1));

        aBookingIsReceived();

        assertEquals(closestDriver, bookingRepository.bookings().get(0).driver());
    }

    @Test
    void should_assign_closest_driver_to_booking_two_driver_inverted() {
        Driver closestDriver = aDriverIsPresent("Albert", new Coordinates(1, 1));
        aDriverIsPresent("Heber", new Coordinates(10, 10));

        aBookingIsReceived();

        assertEquals(closestDriver, bookingRepository.bookings().get(0).driver());
    }

    @Test
    void should_assign_closest_driver_to_booking_three_driver() {
        aDriverIsPresent("Heber", new Coordinates(10, 10));
        aDriverIsPresent("Albert", new Coordinates(1, 1));
        Driver closestDriver = aDriverIsPresent("Yvan", new Coordinates(0, 0));

        aBookingIsReceived();

        assertEquals(closestDriver, bookingRepository.bookings().get(0).driver());
    }

    @Test
    void should_assign_closest_driver_to_booking_seven_driver() {
        aDriverIsPresent("Heber", new Coordinates(10, 10));
        aDriverIsPresent("Albert", new Coordinates(1, 1));
        aDriverIsPresent("Jean", new Coordinates(1, 2));
        aDriverIsPresent("Christine", new Coordinates(2, 1));
        aDriverIsPresent("Bo", new Coordinates(2, 2));
        var closestDriver = aDriverIsPresent("Jade", new Coordinates(0, 1));
        aDriverIsPresent("Bernie", new Coordinates(1, 0));

        aBookingIsReceived();

        assertEquals(closestDriver, bookingRepository.bookings().get(0).driver());
    }

    @Test
    void should_assign_to_first_available_driver() {
        Driver heber = aDriverIsPresent("Heber", new Coordinates(10, 10));
        heber.driveToDestination(new Itinerary(List.of()));
        Driver albert = aDriverIsPresent("Albert", new Coordinates(100, 100));

        aBookingIsReceived();

        assertEquals(albert, bookingRepository.bookings().get(0).driver());
    }

}
