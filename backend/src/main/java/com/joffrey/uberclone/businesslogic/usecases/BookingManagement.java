package com.joffrey.uberclone.businesslogic.usecases;

import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.ports.BookingRepository;

import java.util.UUID;
import java.util.logging.Logger;

import static com.joffrey.uberclone.businesslogic.domain.booking.BookingStatus.*;

public class BookingManagement implements IBookingManagement {

    private final Logger logger = Logger.getLogger(BookingManagement.class.getName());
    private final BookingRepository bookingRepository;
    private final DriverManager driverManager;

    public BookingManagement(BookingRepository bookingRepository, DriverManager driverManager) {
        this.bookingRepository = bookingRepository;
        this.driverManager = driverManager;
    }

    @Override
    public void handle(Customer customer, Coordinates departure, Coordinates destination) {
        Booking booking = saveBooking(customer, departure, destination);
        driverManager.assignToClosestDriver(booking);
    }

    private Booking saveBooking(Customer customer, Coordinates departure, Coordinates destination) {
        Booking booking = new Booking(customer, departure, destination);
        logger.info("Received new booking: " + booking);
        bookingRepository.save(booking);
        return booking;
    }

    @Override
    public void driverArrivedToCustomer(UUID driverId) {
        driverManager.driverArrivedToCustomer(driverId);
        bookingRepository.updateBookingStatus(ONGOING);
    }

    @Override
    public void driverArrivedAtDestination() {
        driverManager.driverArrivedToDestination();
        bookingRepository.updateBookingStatus(COMPLETED);
    }
}
