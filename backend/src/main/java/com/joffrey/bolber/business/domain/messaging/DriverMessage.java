package com.joffrey.bolber.business.domain.messaging;

import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.DriverStatus;

public record DriverMessage(DriverStatus status, Coordinates coordinates) {

}
