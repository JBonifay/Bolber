package com.joffrey.bolber.business.ports;

import com.joffrey.bolber.business.domain.booking.Booking;

import java.util.List;

public interface BookingRepository {
    void save(Booking booking);

    List<Booking> actives();

    void update(Booking booking);
}
