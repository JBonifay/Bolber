package com.joffrey.bolber.business.domain.simulation;

public class FakeSimulationProperties implements SimulationProperties {

    public void waitTimeBetweenDriverMovement() {
        try {
            Thread.sleep(5);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
