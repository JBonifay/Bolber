package com.joffrey.bolber.business.domain.customer;

import com.joffrey.bolber.business.domain.driver.Coordinates;

import java.util.UUID;

public record Customer(UUID customerId, Coordinates pickupPoint) {
}
