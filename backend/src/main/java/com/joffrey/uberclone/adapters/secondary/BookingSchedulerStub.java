package com.joffrey.uberclone.adapters.secondary;

import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import com.joffrey.uberclone.businesslogic.ports.BookingScheduler;
import com.joffrey.uberclone.businesslogic.usecases.BookRideUseCase;

public class BookingSchedulerStub implements BookingScheduler {

    private final BookRideUseCase bookRideUseCase;
    private Coordinates departure;
    private Coordinates destination;
    private Customer customer;

    public BookingSchedulerStub(BookRideUseCase bookRideUseCase) {
        this.bookRideUseCase = bookRideUseCase;
    }

    public void setData(Customer customer, Coordinates departure, Coordinates destination) {
        this.departure = departure;
        this.destination = destination;
        this.customer = customer;
    }
    
    @Override
    public void start() {
        bookRideUseCase.handle(customer, departure, destination);
    }
}
