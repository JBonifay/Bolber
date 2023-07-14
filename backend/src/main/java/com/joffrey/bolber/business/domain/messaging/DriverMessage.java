package com.joffrey.bolber.business.domain.messaging;

import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.DriverStatus;

import java.util.UUID;

public record DriverMessage(UUID driverId, DriverStatus status, Coordinates coordinates) {

}
