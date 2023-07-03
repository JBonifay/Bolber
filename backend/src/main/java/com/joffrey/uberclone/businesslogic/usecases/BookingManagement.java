package com.joffrey.uberclone.businesslogic.usecases;

import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.ports.BookingRepository;
import org.springframework.beans.MutablePropertyValues;

import java.util.List;
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
        Booking booking = createBooking(customer, departure, destination);
        logger.info("Received new booking: " + booking);
        bookingRepository.save(booking);
        driverManager.assignToClosestDriver(booking);
    }

    private Booking createBooking(Customer customer, Coordinates departure, Coordinates destination) {
        return new Booking(customer, departure, destination);
    }

    public void driverArrivedToCustomer(UUID driverId) {
        driverManager.driverArrivedToCustomer(driverId);
        bookingRepository.updateBookingStatus(ONGOING);
    }

    public void driverArrivedAtDestination() {
        driverManager.driverArrivedToDestination();
        bookingRepository.updateBookingStatus(COMPLETED);
    }
}
