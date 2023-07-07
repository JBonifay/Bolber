package com.joffrey.uberclone.businesslogic.domain.notification;

import java.util.UUID;

public record DriverEventMessage(UUID driverId, EventType eventType) {
}