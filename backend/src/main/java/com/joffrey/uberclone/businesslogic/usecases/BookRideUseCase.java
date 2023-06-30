package com.joffrey.uberclone.businesslogic.usecases;

import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.ports.BookingRepository;

import java.util.UUID;

import static com.joffrey.uberclone.businesslogic.domain.booking.BookingStatus.*;

public class BookRideUseCase {

    private final BookingRepository bookingRepository;
    private final DriverManager driverManager;

    public BookRideUseCase(BookingRepository bookingRepository, DriverManager driverManager) {
        this.bookingRepository = bookingRepository;
        this.driverManager = driverManager;
    }

    public void handle(Customer customer, Coordinates departure, Coordinates destination) {
        Booking booking = createBooking(customer, departure, destination);
        bookingRepository.save(booking);
        driverManager.assignToClosestDriver(booking);
    }

    private Booking createBooking(Customer customer, Coordinates departure, Coordinates destination) {
        return new Booking(customer, departure, destination, PENDING);
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
