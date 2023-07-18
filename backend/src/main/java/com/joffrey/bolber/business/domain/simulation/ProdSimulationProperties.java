package com.joffrey.bolber.business.domain.simulation;

public class ProdSimulationProperties implements SimulationProperties {

    @Override
    public void waitTimeBetweenDriverMovement() {
        try {
            Thread.sleep(200);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void pickupWaitTime() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
