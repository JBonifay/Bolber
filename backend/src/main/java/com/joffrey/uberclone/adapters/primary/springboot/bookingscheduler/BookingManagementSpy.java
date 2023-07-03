package com.joffrey.uberclone.adapters.primary.springboot.bookingscheduler;

import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.usecases.IBookingManagement;

import java.util.ArrayList;
import java.util.List;

public class BookingManagementSpy implements IBookingManagement {

    private final List<Booking> bookingReceived = new ArrayList<>();

    private int bookingIdx = 0;

    public Booking previousBookingReceived() {
        return bookingReceived.get(bookingIdx++);
    }

    @Override
    public void handle(Customer customer, Coordinates departure, Coordinates destination) {
        bookingReceived.add(new Booking(customer, departure, destination));
    }
}
