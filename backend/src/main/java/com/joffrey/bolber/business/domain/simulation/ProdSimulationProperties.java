package com.joffrey.bolber.business.domain.simulation;

public class ProdSimulationProperties implements SimulationProperties {

    @Override
    public void waitTimeBetweenDriverMovement() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
