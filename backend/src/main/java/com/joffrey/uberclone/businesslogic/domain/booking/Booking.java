package com.joffrey.uberclone.businesslogic.domain.booking;

import com.joffrey.uberclone.businesslogic.domain.driver.Driver;
import com.joffrey.uberclone.businesslogic.domain.driver.NullDriver;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.Objects;

public final class Booking {
    private final Customer customer;
    private final Coordinates departure;
    private final Coordinates destination;
    private BookingStatus status;
    private Driver driver;

    public Booking(
            Customer customer,
            Coordinates departure,
            Coordinates destination,
            BookingStatus status) {
        this.customer = customer;
        this.departure = departure;
        this.destination = destination;
        this.status = status;
        this.driver = new NullDriver();
    }

    public void setAssignedDriver(Driver driver) {
        this.driver = driver;
        this.status = BookingStatus.CONFIRMED;
    }

    public void changeStatus(BookingStatus bookingStatus) {
        this.status = bookingStatus;
    }

    public Coordinates departure() {
        return departure;
    }

    public BookingStatus status() {
        return status;
    }

    public Driver driver() {
        return driver;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (Booking) obj;
        return Objects.equals(this.customer, that.customer) &&
               Objects.equals(this.departure, that.departure) &&
               Objects.equals(this.destination, that.destination) &&
               Objects.equals(this.status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(customer, departure, destination, status);
    }

    @Override
    public String toString() {
        return "Booking[" +
               "customer=" + customer + ", " +
               "departure=" + departure + ", " +
               "destination=" + destination + ", " +
               "bookingStatus=" + status + ']';
    }
}
