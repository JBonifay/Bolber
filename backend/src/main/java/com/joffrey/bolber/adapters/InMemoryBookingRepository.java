package com.joffrey.bolber.adapters;

import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.ports.BookingRepository;

import java.util.ArrayList;
import java.util.List;

import static com.joffrey.bolber.business.domain.booking.BookingStatus.CONFIRMED;

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
    public List<Booking> actives() {
        return bookings.stream().filter(booking -> booking.status().equals(CONFIRMED)).toList();
    }

    @Override
    public void update(Booking booking) {
        bookings.stream().filter(db -> db.bookingId().equals(booking.bookingId())).findFirst().ifPresent(Booking::finished);
    }
}
