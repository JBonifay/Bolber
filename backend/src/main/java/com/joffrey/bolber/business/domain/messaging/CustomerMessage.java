package com.joffrey.bolber.business.domain.messaging;

import com.joffrey.bolber.business.domain.driver.Coordinates;

import java.util.UUID;

public record CustomerMessage(UUID customerId, Coordinates customerDepartureCoordinates) {
}
