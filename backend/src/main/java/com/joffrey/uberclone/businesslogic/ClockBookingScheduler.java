package com.joffrey.uberclone.businesslogic;

import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import com.joffrey.uberclone.businesslogic.domain.booking.RandomBookingProperties;
import com.joffrey.uberclone.businesslogic.usecases.IBookingManagement;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.concurrent.TimeUnit;

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
