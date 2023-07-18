package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.driver.Driver;

import java.util.ArrayList;
import java.util.List;

public class DriverManagementStub extends DriverManagement {

    private final List<Driver> drivers = new ArrayList<>();
    
    @Override
    public void addDriver(Driver driver) {
        drivers.add(driver);
    }

    @Override
    public List<Driver> drivers() {
        return drivers;
    }

    @Override
    public void assignNearestDriver(Booking booking) {
        booking.assignDriver(this.drivers.get(0));
    }

    @Override
    public boolean anyDriverAvailable() {
        return false;
    }
}
