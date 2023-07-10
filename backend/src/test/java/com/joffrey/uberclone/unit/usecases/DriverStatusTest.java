package com.joffrey.uberclone.unit.usecases;

import com.joffrey.uberclone.businesslogic.domain.driver.Driver;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static com.joffrey.uberclone.businesslogic.domain.driver.DriverStatus.*;
import static com.joffrey.uberclone.businesslogic.domain.notification.EventType.ARRIVED_TO_CUSTOMER;
import static com.joffrey.uberclone.businesslogic.domain.notification.EventType.ARRIVED_TO_DESTINATION;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class DriverStatusTest extends BookingManagementTest {

    @Test
    void driver_status_should_be_waiting_for_ride_when_idle() {
        Driver driver = new Driver(UUID.randomUUID(), "Albert", new Coordinates(10, 10));
        assertEquals(WAITING_FOR_RIDE, driver.status());
    }

    @Test
    void driver_status_should_be_driving_to_customer_when_booking_assigned() {
        Driver closestDriver = aDriverIsPresent("Albert", new Coordinates(10, 10));

        aBookingIsReceived();

        assertEquals(DRIVING_TO_CUSTOMER, closestDriver.status());
    }

    @Test
    void driver_status_should_be_driving_to_destination_when_customer_has_been_picked_up() {
        Driver driver = aDriverIsPresent("Heber", new Coordinates(10, 10));
        aBookingIsReceived();

        newDriverEvent(driver.id(), ARRIVED_TO_CUSTOMER);

        assertEquals(DRIVING_TO_DESTINATION, driver.status());
    }

    @Test
    void driver_status_should_be_available_when_customer_has_been_picked_up() {
        Driver driver = aDriverIsPresent("Heber", new Coordinates(10, 10));
        aBookingIsReceived();
        newDriverEvent(driver.id(), ARRIVED_TO_CUSTOMER);

        newDriverEvent(driver.id(), ARRIVED_TO_DESTINATION);

        assertEquals(WAITING_FOR_RIDE, driver.status());
    }
    
}
