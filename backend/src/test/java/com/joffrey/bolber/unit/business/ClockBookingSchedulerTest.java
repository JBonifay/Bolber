package com.joffrey.bolber.unit.business;

import com.joffrey.bolber.ClockBookingScheduler;
import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.domain.map.Block;
import com.joffrey.bolber.business.domain.simulation.FakeSimulationProperties;
import com.joffrey.bolber.doubles.BookingManagementSpy;
import com.joffrey.bolber.doubles.NavigationSystemStub;
import com.joffrey.bolber.doubles.RandomBookingPropertiesSpy;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static com.joffrey.bolber.fixtures.BlockFixtures.B;
import static com.joffrey.bolber.fixtures.BlockFixtures.R;
import static java.util.concurrent.TimeUnit.SECONDS;
import static org.awaitility.Awaitility.await;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ClockBookingSchedulerTest {

    private final BookingManagementSpy bookingManagement = new BookingManagementSpy();
    private final DriverManagement driverManagement = new DriverManagement();
    private ClockBookingScheduler clockBookingScheduler;
    private RandomBookingPropertiesSpy randomBookingProperties;

    @BeforeEach
    void setUp() {
        Block[] map = new Block[]{
                B(0, 0), R(1, 0), B(2, 0)
        };
        randomBookingProperties = new RandomBookingPropertiesSpy(map);
        clockBookingScheduler = new ClockBookingScheduler(bookingManagement, driverManagement, randomBookingProperties);
    }

    @Test
    void should_send_random_booking_values() {

        driverManagement.addDriver(new Driver(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), "Albert", new Coordinates(10, 10), new NavigationSystemStub()));
        startScheduler();

        expectBookingWasHandledWithRandomValues();
    }

    @Test
    void random_customer_position_should_be_on_map() {
        assertEquals(new Coordinates(1, 0), randomBookingProperties.nextDeparture());
    }

    @Test
    void random_destination_should_be_on_map() {
        assertEquals(new Coordinates(1, 0), randomBookingProperties.nextDestination());
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
        await()
                .atMost(3, SECONDS)
                .untilAsserted(() -> {
                    Booking booking = new Booking(
                            UUID.randomUUID(),
                            randomBookingProperties.previousDeparture(),
                            randomBookingProperties.previousDestination());
                    assertEquals(
                            booking,
                            bookingManagement.previousBookingReceived()
                    );
                });
    }

}