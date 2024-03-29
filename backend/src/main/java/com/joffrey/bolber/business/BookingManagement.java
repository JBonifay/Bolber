package com.joffrey.bolber.business;

import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.customer.Customer;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.domain.messaging.CustomerMessage;
import com.joffrey.bolber.business.ports.BookingRepository;
import com.joffrey.bolber.business.ports.CustomerNotification;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

/**
 * Handles the creation and management of bookings. It may have methods like createBooking(), cancelBooking(), etc.
 */
public class BookingManagement {
    private final Logger logger = LoggerFactory.getLogger(getClass().getName());
    private final BookingRepository bookingRepository;
    private final DriverManagement driverManagement;
    private final CustomerNotification customerNotification;

    public BookingManagement(BookingRepository bookingRepository, DriverManagement driverManagement, CustomerNotification customerNotification) {
        this.bookingRepository = bookingRepository;
        this.driverManagement = driverManagement;
        this.customerNotification = customerNotification;
    }

    public void handle(Booking booking) {
        logger.info("Booking received :" + booking);
        driverManagement.assignNearestDriver(booking);
        bookingRepository.save(booking);

        customerNotification.notify(new CustomerMessage(booking.customerId(), booking.departure()));

        Driver driver = booking.driver();
        driver.setRideInfo(booking);
        driver.setOnRideFinishedListener(() -> bookingRepository.update(booking));
        driver.startRide();
    }

    public List<Customer> customersOnHold() {
        return bookingRepository.actives().stream().map(booking -> new Customer(booking.customerId(), booking.departure())).toList();
    }
}
