package com.joffrey.uberclone.unit.usecases;

import com.joffrey.uberclone.businesslogic.domain.driver.Driver;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import org.junit.jupiter.api.Test;

import static com.joffrey.uberclone.businesslogic.domain.booking.BookingStatus.*;
import static com.joffrey.uberclone.businesslogic.domain.notification.EventType.ARRIVED_TO_CUSTOMER;
import static com.joffrey.uberclone.businesslogic.domain.notification.EventType.ARRIVED_TO_DESTINATION;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class BookingStatusTest extends BookingManagementTest {

    @Test
    void booking_status_should_be_pending_when_booking_created_and_no_driver_assigned() {
        aBookingIsReceived();

        assertEquals(PENDING, bookingRepository.bookings().get(0).status());
    }

    @Test
    void booking_status_should_be_confirmed_when_driver_was_assigned_to_ride() {
        aDriverIsPresent("Albert", new Coordinates(10, 10));
        aBookingIsReceived();

        assertEquals(CONFIRMED, bookingRepository.bookings().get(0).status());
    }

    @Test
    void booking_status_should_be_ongoing_when_driver_has_picked_up_customer() {
        Driver driver = aDriverIsPresent("Heber", new Coordinates(10, 10));
        aBookingIsReceived();

        newDriverEvent(driver.id(), ARRIVED_TO_CUSTOMER);

        assertEquals(ONGOING, bookingRepository.bookings().get(0).status());
    }

    @Test
    void booking_status_should_be_completed_when_driver_arrived_to_destination() {
        Driver driver = aDriverIsPresent("Heber", new Coordinates(10, 10));
        aBookingIsReceived();
        newDriverEvent(driver.id(), ARRIVED_TO_CUSTOMER);

        newDriverEvent(driver.id(), ARRIVED_TO_DESTINATION);

        assertEquals(COMPLETED, bookingRepository.bookings().get(0).status());
    }

}
