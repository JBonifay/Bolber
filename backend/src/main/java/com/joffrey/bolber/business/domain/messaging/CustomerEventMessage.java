package com.joffrey.bolber.business.domain.messaging;

import java.util.UUID;

public record CustomerEventMessage(UUID uuid, SimulationEventType simulationEventType) {
}
