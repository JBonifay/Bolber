package com.joffrey.bolber.adapters.configuration;

import com.joffrey.bolber.adapters.secondary.SpringDriverNotification;
import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.MapManagement;
import com.joffrey.bolber.business.domain.csv.FileCsvReader;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.domain.driver.NavigationSystem;
import com.joffrey.bolber.business.domain.pathfinding.BFS;
import com.joffrey.bolber.business.domain.simulation.ProdSimulationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.UUID;

@Profile("prod")
@Configuration
public class SpringProdConfiguration {

    @Bean
    public MapManagement mapManagement() {
        MapManagement mapManagement = new MapManagement();
        mapManagement.generateMap(50, 50);
        mapManagement.generateBlocksFromCsvInput(new FileCsvReader().readFile("init.csv"));
        return mapManagement;
    }

    @Bean
    public DriverManagement driverManagement(MapManagement mapManagement, SpringDriverNotification springDriverNotification) {
        DriverManagement driverManagement = new DriverManagement();
        ProdSimulationProperties simulationProperties = new ProdSimulationProperties();
        driverManagement.addDriver(new Driver(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), "Robert Plant", new Coordinates(0, 0), navigationSystem(mapManagement, springDriverNotification, simulationProperties)));
        driverManagement.addDriver(new Driver(UUID.fromString("7b19b7e7-4735-470a-812f-f970508ab1e4"), "Henry Dufour", new Coordinates(10, 10), navigationSystem(mapManagement, springDriverNotification, simulationProperties)));
        driverManagement.addDriver(new Driver(UUID.fromString("823d4f51-20e9-45ef-8773-4c623ac6334d"), "Marta Blav", new Coordinates(5, 20), navigationSystem(mapManagement, springDriverNotification, simulationProperties)));
        driverManagement.addDriver(new Driver(UUID.fromString("d17e24ec-a911-467d-9f9e-f1dd3c98bc5e"), "Yanis Boucji", new Coordinates(40, 40), navigationSystem(mapManagement, springDriverNotification, simulationProperties)));
        driverManagement.addDriver(new Driver(UUID.fromString("0d8bcd89-0871-4002-a7de-f87d3fa17f0a"), "Jérome Arp", new Coordinates(34, 45), navigationSystem(mapManagement, springDriverNotification, simulationProperties)));
        return driverManagement;
    }

    private NavigationSystem navigationSystem(MapManagement mapManagement, SpringDriverNotification springDriverNotification, ProdSimulationProperties simulationProperties) {
        return new NavigationSystem(simulationProperties,
                springDriverNotification,
                new BFS(),
                mapManagement.map());
    }
}
