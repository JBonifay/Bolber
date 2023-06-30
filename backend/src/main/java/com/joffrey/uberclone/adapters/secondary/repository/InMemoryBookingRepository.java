package com.joffrey.uberclone.adapters.secondary.repository;

import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.booking.BookingStatus;
import com.joffrey.uberclone.businesslogic.ports.BookingRepository;

import java.util.ArrayList;
import java.util.List;

public class InMemoryBookingRepository implements BookingRepository {

    private final List<Booking> bookings = new ArrayList<>();

    public List<Booking> bookings() {
        return bookings;
    }


    @Override
    public void save(Booking booking) {
        bookings.add(booking);
    }

    @Override
    public void updateBookingStatus(BookingStatus bookingStatus) {
        bookings.get(0).changeStatus(bookingStatus);
    }
}
