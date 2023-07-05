package com.joffrey.uberclone.adapters.bookingscheduler;

import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import com.joffrey.uberclone.businesslogic.ports.BookingScheduler;
import com.joffrey.uberclone.businesslogic.usecases.IBookingManagement;

public class BookingSchedulerStub implements BookingScheduler {

    private final IBookingManagement IBookingManagement;
    private Coordinates departure;
    private Coordinates destination;
    private Customer customer;

    public BookingSchedulerStub(IBookingManagement IBookingManagement) {
        this.IBookingManagement = IBookingManagement;
    }

    public void setData(Customer customer, Coordinates departure, Coordinates destination) {
        this.departure = departure;
        this.destination = destination;
        this.customer = customer;
    }
    
    @Override
    public void start() {
        IBookingManagement.handle(customer, departure, destination);
    }
}
