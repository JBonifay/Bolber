package com.joffrey.uberclone.businesslogic;

import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import com.joffrey.uberclone.businesslogic.domain.booking.RandomBookingProperties;
import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.businesslogic.usecases.IBookingManagement;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.concurrent.TimeUnit;

public class ClockBookingScheduler implements BookingScheduler {

    private final IBookingManagement bookingManagement;
    private final DriverManager driverManager;
    private final RandomBookingProperties randomBookingProperties;

    public ClockBookingScheduler(IBookingManagement bookingManagement, DriverManager driverManager, RandomBookingProperties randomBookingProperties) {
        this.bookingManagement = bookingManagement;
        this.driverManager = driverManager;
        this.randomBookingProperties = randomBookingProperties;
    }

    @Override
    @Scheduled(fixedDelay = 3, timeUnit = TimeUnit.SECONDS)
    public void start() {
        if (driverManager.availableDriversCount() > 0) {
            bookingManagement.handle(new Customer(randomBookingProperties.nextUuid(), randomBookingProperties.nextName()), randomBookingProperties.nextDeparture(), randomBookingProperties.nextDestination());
        }
    }

}
