package com.joffrey.uberclone.configuration;

import com.joffrey.uberclone.adapters.bookingscheduler.RandomBookingProperties;
import com.joffrey.uberclone.adapters.secondary.EventNotifierStub;
import com.joffrey.uberclone.adapters.secondary.repository.InMemoryBookingRepository;
import com.joffrey.uberclone.businesslogic.domain.driver.Driver;
import com.joffrey.uberclone.businesslogic.domain.driver.DriverAssignment;
import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.businesslogic.domain.driver.NearestDriverLocator;
import com.joffrey.uberclone.businesslogic.domain.itinerary.*;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.domain.map.SimulationMap;
import com.joffrey.uberclone.businesslogic.usecases.BookingManagement;
import com.joffrey.uberclone.businesslogic.usecases.IBookingManagement;
import com.joffrey.uberclone.businesslogic.usecases.MapGeneration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.UUID;

@Profile(value = {"prod", "dev"})
@Configuration
public class BeanGlobalConfiguration {

    @Bean
    public DriverManager driverManager(MapGeneration mapGeneration) {
        DriverManager driverManager = new DriverManager(
                new DriverAssignment(new EventNotifierStub(),
                        new PathFindingItineraryFinder(
                                new BFS(
                                        new NeighborFinder(),
                                        new PathReconstruct()),
                                new SimulationMap(mapGeneration.map())),
                        new NearestDriverLocator()));
        insertDrivers(driverManager);
        return driverManager;
    }

    private void insertDrivers(DriverManager driverManager) {
        driverManager.addDriver(new Driver(UUID.fromString("4a2941b4-c4fb-43eb-b74c-c3d93f313255"), "Robert Plant", new Coordinates(0, 0)));
        driverManager.addDriver(new Driver(UUID.fromString("903ecee0-f433-4994-9644-c0a8cee9d05e"), "Henry Dufour", new Coordinates(10, 10)));
        driverManager.addDriver(new Driver(UUID.fromString("b53ddb6b-0a58-46f9-9ca0-cdbcc8d2b8ff"), "Marta Blav", new Coordinates(5, 20)));
        driverManager.addDriver(new Driver(UUID.fromString("275eedc2-bec9-4d62-b90b-f1289b8e2465"), "Yanis Boucji", new Coordinates(40, 40)));
        driverManager.addDriver(new Driver(UUID.fromString("0702206b-72ef-4c3e-b832-0c15fc5123a3"), "Jérome Arp", new Coordinates(34, 45)));
    }

    @Bean
    public IBookingManagement bookingManagement(DriverManager driverManager) {
        return new BookingManagement(
                new InMemoryBookingRepository(),
                driverManager);
    }

    @Bean
    public ItineraryFinder itineraryUseCase(MapGeneration mapGeneration) {
        return new PathFindingItineraryFinder(new BFS(new NeighborFinder(), new PathReconstruct()), new SimulationMap(mapGeneration.map()));
    }

    @Bean
    public RandomBookingProperties randomBookingProperties() {
        return new RandomBookingProperties();
    }
}
