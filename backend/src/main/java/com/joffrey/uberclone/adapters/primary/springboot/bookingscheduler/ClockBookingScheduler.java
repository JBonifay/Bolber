package com.joffrey.uberclone.adapters.primary.springboot.bookingscheduler;

import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import com.joffrey.uberclone.businesslogic.ports.BookingScheduler;
import com.joffrey.uberclone.businesslogic.usecases.IBookingManagement;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
public class ClockBookingScheduler implements BookingScheduler {

    private final IBookingManagement IBookingManagement;
    private final RandomBookingProperties randomBookingProperties;


    public ClockBookingScheduler(IBookingManagement IBookingManagement, RandomBookingProperties randomBookingProperties) {
        this.IBookingManagement = IBookingManagement;
        this.randomBookingProperties = randomBookingProperties;
    }

    @Override
    @Scheduled(fixedDelay = 3, timeUnit = TimeUnit.SECONDS)
    public void start() {
        IBookingManagement.handle(new Customer(randomBookingProperties.nextUuid(), randomBookingProperties.nextName()), randomBookingProperties.nextDeparture(), randomBookingProperties.nextDestination());
    }

}
