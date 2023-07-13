package com.joffrey.bolber.business.ports;

import com.joffrey.bolber.business.domain.booking.Booking;

public interface BookingRepository {
    void save(Booking booking);
}
