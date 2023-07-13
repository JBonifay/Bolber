package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.domain.booking.Booking;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BookingManagementSpy extends BookingManagement {
    private final List<Booking> bookingReceived = new ArrayList<>();
    private int bookingIdx = 0;

    public BookingManagementSpy() {
        super(null, null);
    }

    public Booking previousBookingReceived() {
        return bookingReceived.get(bookingIdx++);
    }

    @Override
    public void handle(Booking booking) {
        bookingReceived.add(booking);
    }

    public List<Booking> bookingsReceived() {
        return bookingReceived;
    }
}
