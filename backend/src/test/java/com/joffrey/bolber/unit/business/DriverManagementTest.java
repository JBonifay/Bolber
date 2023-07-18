package com.joffrey.bolber.unit.business;

import com.joffrey.bolber.adapters.InMemoryBookingRepository;
import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.domain.simulation.FakeSimulationProperties;
import com.joffrey.bolber.doubles.CustomerNotificationStub;
import com.joffrey.bolber.doubles.NavigationSystemStub;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;

class DriverManagementTest {
    private final DriverManagement driverManagement = new DriverManagement();
    private final InMemoryBookingRepository bookingRepository = new InMemoryBookingRepository();
    private final BookingManagement bookingManagement = new BookingManagement(bookingRepository, driverManagement, new CustomerNotificationStub());
    private final NavigationSystemStub navigationSystemStub = new NavigationSystemStub(new FakeSimulationProperties(), null);

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
        Driver albert = aDriverIsPresent("Albert", new Coordinates(100, 100));
        heber.startRide(UUID.fromString("1e9e229b-98a5-496f-b52e-1392d40c8a4d"));

        aBookingIsReceived();

        assertEquals(albert, bookingRepository.bookings().get(0).driver());
    }

    private void aBookingIsReceived() {
        Coordinates departure = new Coordinates(0, 0);
        Coordinates destination = new Coordinates(2, 2);
        bookingManagement.handle(new Booking(UUID.randomUUID(), departure, destination));
    }

    private Driver aDriverIsPresent(String driverName, Coordinates currentCoordinates) {
        Driver driver = new Driver(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), driverName, currentCoordinates, navigationSystemStub);
        driverManagement.addDriver(driver);
        return driver;
    }
}