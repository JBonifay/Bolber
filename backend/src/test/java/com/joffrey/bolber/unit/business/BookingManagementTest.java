package com.joffrey.bolber.unit.business;

import com.joffrey.bolber.adapters.InMemoryBookingRepository;
import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.ports.BookingRepository;
import com.joffrey.bolber.doubles.CustomerNotificationStub;
import com.joffrey.bolber.doubles.DriverManagementStub;
import com.joffrey.bolber.doubles.NavigationSystemStub;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static com.joffrey.bolber.business.domain.booking.BookingStatus.CONFIRMED;
import static com.joffrey.bolber.business.domain.booking.BookingStatus.FINISHED;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class BookingManagementTest {

    private final BookingRepository bookingRepository = new InMemoryBookingRepository();
    private final DriverManagementStub driverManagement = new DriverManagementStub();
    private final BookingManagement bookingManagement = new BookingManagement(bookingRepository, driverManagement, new CustomerNotificationStub());
    private final NavigationSystemStub navigationSystem = new NavigationSystemStub();

    @BeforeEach
    void setUp() {
        Driver driver = new Driver(UUID.randomUUID(), "driverName", new Coordinates(0, 0), navigationSystem);
        driverManagement.addDriver(driver);
        navigationSystem.setNavigationListener(driver);
    }

    @Test
    void booking_status_should_be_confirmed_when_created() {
        Booking booking = new Booking(UUID.randomUUID(), null, null);
        assertEquals(CONFIRMED, booking.status());
    }

    @Test
    void booking_status_should_be_finished_when_ended() {
        Booking booking = new Booking(UUID.randomUUID(), null, null);
        bookingManagement.handle(booking);
        assertEquals(FINISHED, booking.status());
    }

//    @Test
//    void should_return_customers_waiting_for_driver() {
//        bookingRepository.save(new Booking(UUID.fromString("85be2ea7-ee9a-4a56-98f6-7129f92188e7"), new Coordinates(0, 0), null));
//        bookingRepository.save(new Booking(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), new Coordinates(4, 2), null));
//        Booking finishedBooking = new Booking(UUID.fromString("23d13ae9-2878-46c4-89f5-ba0c4fc943c7"), new Coordinates(4, 2), null);
//        bookingManagement.handle(finishedBooking);
//
//        List<Customer> customersWaitingForDriver = bookingManagement.customersOnHold();
//
//        assertIterableEquals(List.of(
//                new Customer(UUID.fromString("85be2ea7-ee9a-4a56-98f6-7129f92188e7"), new Coordinates(0, 0)),
//                new Customer(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), new Coordinates(4, 2))
//        ), customersWaitingForDriver);
//    }
}
