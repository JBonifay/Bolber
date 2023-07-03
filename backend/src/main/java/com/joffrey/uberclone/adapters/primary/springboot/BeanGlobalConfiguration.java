package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.adapters.primary.springboot.bookingscheduler.RandomBookingProperties;
import com.joffrey.uberclone.adapters.secondary.EventNotifierStub;
import com.joffrey.uberclone.adapters.secondary.repository.InMemoryBookingRepository;
import com.joffrey.uberclone.businesslogic.domain.driver.DriverAssignment;
import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.businesslogic.domain.driver.NearestDriverLocator;
import com.joffrey.uberclone.businesslogic.domain.itinerary.*;
import com.joffrey.uberclone.businesslogic.domain.map.SimulationMap;
import com.joffrey.uberclone.businesslogic.usecases.BookingManagement;
import com.joffrey.uberclone.businesslogic.usecases.IBookingManagement;
import com.joffrey.uberclone.businesslogic.usecases.MapGenerationUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile(value = {"prod", "dev"})
@Configuration
public class BeanGlobalConfiguration {

    @Bean
    public IBookingManagement bookingManagement(MapGenerationUseCase mapGenerationUseCase) {
        return new BookingManagement(
                new InMemoryBookingRepository(),
                new DriverManager(
                        new DriverAssignment(new EventNotifierStub(),
                                new PathFindingItineraryFinder(
                                        new BFS(
                                                new NeighborFinder(),
                                                new PathReconstruct()),
                                        new SimulationMap(mapGenerationUseCase.map())),
                                new NearestDriverLocator())));
    }

    @Bean
    public ItineraryFinder itineraryUseCase(MapGenerationUseCase mapGenerationUseCase) {
        return new PathFindingItineraryFinder(new BFS(new NeighborFinder(), new PathReconstruct()), new SimulationMap(mapGenerationUseCase.map()));
    }

    @Bean
    public RandomBookingProperties randomBookingProperties() {
        return new RandomBookingProperties(); 
    }
}
