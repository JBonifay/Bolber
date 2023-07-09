package com.joffrey.uberclone.integration.adapters.primary;

import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.testdouble.BookingManagementSpy;
import com.joffrey.uberclone.businesslogic.ClockBookingScheduler;
import com.joffrey.uberclone.testdouble.RandomBookingPropertiesSpy;
import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import org.junit.jupiter.api.Test;

import static com.joffrey.uberclone.fixtures.DriverFixtures.driverAlbert;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class ClockBookingSchedulerTest {

    private final BookingManagementSpy bookingManagement = new BookingManagementSpy();
    private final DriverManager driverManager = new DriverManager(null);
    private final RandomBookingPropertiesSpy randomBookingProperties = new RandomBookingPropertiesSpy();
    private final ClockBookingScheduler clockBookingScheduler = new ClockBookingScheduler(bookingManagement, driverManager, randomBookingProperties);


    @Test
    void should_send_random_booking_values() {
        driverManager.addDriver(driverAlbert());
        startScheduler();

        expectBookingWasHandledWithRandomValues();
    }

    @Test
    void should_not_send_booking_when_no_drivers_available() {
        startScheduler();

        bookingManagement.assertNoBookingReceived();
    }

    private void startScheduler() {
        clockBookingScheduler.start();
    }

    private void expectBookingWasHandledWithRandomValues() {
        Booking booking = new Booking(
                new Customer(
                        randomBookingProperties.previousUuid(),
                        randomBookingProperties.previousName()
                ),
                randomBookingProperties.previousDeparture(),
                randomBookingProperties.previousDestination());
        assertEquals(
                booking,
                bookingManagement.previousBookingReceived()
        );
    }

}