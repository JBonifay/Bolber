package com.joffrey.bolber.adapters.configuration;

import com.joffrey.bolber.adapters.secondary.SpringDriverNotification;
import com.joffrey.bolber.adapters.secondary.SpringSimulationNotification;
import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.MapManagement;
import com.joffrey.bolber.business.domain.csv.FileCsvReader;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.domain.driver.NavigationSystem;
import com.joffrey.bolber.business.domain.pathfinding.BFS;
import com.joffrey.bolber.business.domain.simulation.FakeSimulationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.UUID;

@Profile("integration-test")
@Configuration
public class SpringITConfiguration {

    @Bean
    public MapManagement mapManagement() {
        MapManagement mapManagement = new MapManagement();
        mapManagement.generateMap(5, 5);
        mapManagement.generateBlocksFromCsvInput(new FileCsvReader().readFile("test-tiny-map.csv"));
        return mapManagement;
    }

    @Bean
    public DriverManagement driverManagement(MapManagement mapManagement, SpringDriverNotification springDriverNotification, SpringSimulationNotification simulationNotification) {
        DriverManagement driverManagement = new DriverManagement();
        NavigationSystem navigationSystem = new NavigationSystem(new FakeSimulationProperties(), springDriverNotification, simulationNotification, new BFS(), mapManagement.map());
        driverManagement.addDriver(new Driver(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), "Robert Plant", new Coordinates(0, 0), navigationSystem));
        return driverManagement;
    }

}