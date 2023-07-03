package com.joffrey.uberclone.integration.adapters.primary;

import com.joffrey.uberclone.adapters.primary.springboot.bookingscheduler.BookingManagementSpy;
import com.joffrey.uberclone.adapters.primary.springboot.bookingscheduler.ClockBookingScheduler;
import com.joffrey.uberclone.adapters.primary.springboot.bookingscheduler.RandomBookingPropertiesSpy;
import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ClockBookingSchedulerTest {

    private final BookingManagementSpy bookingManagement = new BookingManagementSpy();
    private final RandomBookingPropertiesSpy randomBookingProperties = new RandomBookingPropertiesSpy();
    private final ClockBookingScheduler clockBookingScheduler = new ClockBookingScheduler(bookingManagement, randomBookingProperties);


    @Test
    void should_send_random_booking_values() {
        executeScheduledJob();
        expectBookingWasHandledWithRandomValues();
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

    private void executeScheduledJob() {
        clockBookingScheduler.start();
    }

}