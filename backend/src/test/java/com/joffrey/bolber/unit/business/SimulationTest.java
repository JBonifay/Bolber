package com.joffrey.bolber.unit.business;

import com.joffrey.bolber.adapters.InMemoryBookingRepository;
import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.domain.messaging.CustomerMessage;
import com.joffrey.bolber.doubles.NavigationSystemStub;
import com.joffrey.bolber.doubles.CustomerNotificationSpy;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SimulationTest {

    private final CustomerNotificationSpy simulationNotification = new CustomerNotificationSpy();
    private final DriverManagement driverManagement = new DriverManagement();
    private final BookingManagement bookingManagement = new BookingManagement(new InMemoryBookingRepository(), driverManagement, simulationNotification);

    @BeforeEach
    void setUp() {
        driverManagement.addDriver(new Driver(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), "Robert Plant", new Coordinates(0, 0), new NavigationSystemStub()));
    }

    @Test
    void should_send_notification_about_customer_position_on_map_when_booking_received() {
        UUID customerId = UUID.fromString("ff51aaaf-0e1e-4557-bde2-b73ca48c2bea");
        Booking booking = new Booking(customerId, new Coordinates(0, 0), new Coordinates(10, 10));
        bookingManagement.handle(booking);

        assertEquals(
                new CustomerMessage(customerId, new Coordinates(0, 0)),
                simulationNotification.previousNotification()
        );
    }
}
