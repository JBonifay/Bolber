package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.domain.driver.DriverStatus;
import com.joffrey.bolber.business.domain.driver.NavigationSystem;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public final class DriverSpy extends Driver {

    private final List<Coordinates> steps = new ArrayList<>();
    private final List<DriverStatus> statuses = new ArrayList<>();

    public DriverSpy(UUID driverId, String driverName, Coordinates currentCoordinates, NavigationSystem navigationSystem) {
        super(driverId, driverName, currentCoordinates, navigationSystem);
    }


    @Override
    public void onMove(Coordinates coordinates) {
        super.onMove(coordinates);
        steps.add(coordinates);
    }

    @Override
    protected void updateStatus(DriverStatus driverStatus) {
        super.updateStatus(driverStatus);
        statuses.add(driverStatus);
    }

    public List<Coordinates> updatedPositions() {
        return steps;
    }

    public List<DriverStatus> updatedStatus() {
        return statuses;
    }
}
