package com.joffrey.bolber;

import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.domain.booking.Booking;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Profile("prod")
@Component
public class ClockBookingScheduler {

    private final BookingManagement bookingManagement;
    private final DriverManagement driverManagement;
    private final RandomBookingProperties randomBookingProperties;

    public ClockBookingScheduler(BookingManagement bookingManagement, DriverManagement driverManagement, RandomBookingProperties randomBookingProperties) {
        this.bookingManagement = bookingManagement;
        this.driverManagement = driverManagement;
        this.randomBookingProperties = randomBookingProperties;
    }

    @Scheduled(fixedDelay = 3, timeUnit = TimeUnit.SECONDS)
    public void start() {
        if (driverManagement.anyDriverAvailable()) {
            new Thread(() -> {
                bookingManagement.handle(new Booking(randomBookingProperties.nextDeparture(), randomBookingProperties.nextDestination()));
            }).start();
        }
    }

}
