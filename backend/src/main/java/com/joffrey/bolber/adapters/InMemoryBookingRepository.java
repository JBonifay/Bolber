package com.joffrey.bolber.adapters;

import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.ports.BookingRepository;

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
}
