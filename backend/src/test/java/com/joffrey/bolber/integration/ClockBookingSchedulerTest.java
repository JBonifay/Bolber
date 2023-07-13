package com.joffrey.bolber.integration;

import com.joffrey.bolber.ClockBookingScheduler;
import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.domain.simulation.FakeSimulationProperties;
import com.joffrey.bolber.doubles.BookingManagementSpy;
import com.joffrey.bolber.doubles.NavigationSystemStub;
import com.joffrey.bolber.doubles.RandomBookingPropertiesSpy;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ClockBookingSchedulerTest {

    private final BookingManagementSpy bookingManagement = new BookingManagementSpy();
    private final DriverManagement driverManagement = new DriverManagement();
    private final RandomBookingPropertiesSpy randomBookingProperties = new RandomBookingPropertiesSpy();
    private final ClockBookingScheduler clockBookingScheduler = new ClockBookingScheduler(bookingManagement, driverManagement, randomBookingProperties);


    @Test
    void should_send_random_booking_values() {
        driverManagement.addDriver(new Driver("Albert", new Coordinates(10, 10), new NavigationSystemStub(new FakeSimulationProperties(), null)));
        startScheduler();

        expectBookingWasHandledWithRandomValues();
    }

    @Test
    void should_not_send_booking_when_no_drivers_available() {
        startScheduler();

        assertTrue(bookingManagement.bookingsReceived().isEmpty());
    }

    private void startScheduler() {
        clockBookingScheduler.start();
    }

    private void expectBookingWasHandledWithRandomValues() {
        Booking booking = new Booking(
                randomBookingProperties.previousDeparture(),
                randomBookingProperties.previousDestination());
        assertEquals(
                booking,
                bookingManagement.previousBookingReceived()
        );
    }

}