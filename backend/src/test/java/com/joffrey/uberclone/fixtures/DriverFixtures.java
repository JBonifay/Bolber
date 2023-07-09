package com.joffrey.uberclone.fixtures;

import com.joffrey.uberclone.businesslogic.domain.driver.Driver;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.UUID;

public class DriverFixtures {

    public static Driver driverAlbert() {
        return new Driver(UUID.fromString("986d1ce4-1805-11ee-be56-0242ac120002"), "Albert", new Coordinates(10, 10));
    }
}
