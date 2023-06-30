package com.joffrey.uberclone.businesslogic.ports;

import com.joffrey.uberclone.businesslogic.domain.booking.Booking;
import com.joffrey.uberclone.businesslogic.domain.booking.BookingStatus;

public interface BookingRepository {
    void save(Booking booking);

    void updateBookingStatus(BookingStatus completed);
}
