package com.joffrey.bolber.business;

import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.ports.BookingRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Handles the creation and management of bookings. It may have methods like createBooking(), cancelBooking(), etc.
 */
public class BookingManagement {
    private final Logger logger = LoggerFactory.getLogger(getClass().getName());
    private final BookingRepository bookingRepository;
    private final DriverManagement driverManagement;

    public BookingManagement(BookingRepository bookingRepository, DriverManagement driverManagement) {
        this.bookingRepository = bookingRepository;
        this.driverManagement = driverManagement;
    }

    public void handle(Booking booking) {
        logger.info("Booking received :" + booking);
        driverManagement.assignDriver(booking);
        bookingRepository.save(booking);
    }

}
