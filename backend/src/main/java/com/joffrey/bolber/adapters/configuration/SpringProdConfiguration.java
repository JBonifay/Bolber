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
        driverManagement.addDriver(new Driver("Robert Plant", new Coordinates(0, 0), navigationSystem(mapManagement, springDriverNotification, simulationProperties)));
        driverManagement.addDriver(new Driver("Henry Dufour", new Coordinates(10, 10), navigationSystem(mapManagement, springDriverNotification, simulationProperties)));
        driverManagement.addDriver(new Driver("Marta Blav", new Coordinates(5, 20), navigationSystem(mapManagement, springDriverNotification, simulationProperties)));
        driverManagement.addDriver(new Driver("Yanis Boucji", new Coordinates(40, 40), navigationSystem(mapManagement, springDriverNotification, simulationProperties)));
        driverManagement.addDriver(new Driver("Jérome Arp", new Coordinates(34, 45), navigationSystem(mapManagement, springDriverNotification, simulationProperties)));
        return driverManagement;
    }

    private NavigationSystem navigationSystem(MapManagement mapManagement, SpringDriverNotification springDriverNotification, ProdSimulationProperties simulationProperties) {
        return new NavigationSystem(simulationProperties,
                springDriverNotification,
                new BFS(),
                mapManagement.map());
    }
}
