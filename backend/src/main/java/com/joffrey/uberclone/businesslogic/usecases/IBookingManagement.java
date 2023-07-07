package com.joffrey.uberclone.businesslogic.usecases;

import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.UUID;

public interface IBookingManagement {
    void handle(Customer customer, Coordinates departure, Coordinates destination);

    void driverArrivedToCustomer(UUID driverId);

    void driverArrivedAtDestination();
}
