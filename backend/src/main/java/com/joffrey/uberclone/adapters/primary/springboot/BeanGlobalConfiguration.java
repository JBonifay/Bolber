package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.domain.map.SimulationMap;
import com.joffrey.uberclone.businesslogic.domain.itinerary.PathFindingItineraryFinder;
import com.joffrey.uberclone.businesslogic.domain.itinerary.BFS;
import com.joffrey.uberclone.businesslogic.domain.itinerary.NeighborFinder;
import com.joffrey.uberclone.businesslogic.domain.itinerary.PathReconstruct;
import com.joffrey.uberclone.businesslogic.domain.itinerary.ItineraryFinder;
import com.joffrey.uberclone.businesslogic.usecases.MapGenerationUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanGlobalConfiguration {

    @Bean
    public ItineraryFinder itineraryUseCase(MapGenerationUseCase mapGenerationUseCase) {
        return new PathFindingItineraryFinder(new BFS(new NeighborFinder(), new PathReconstruct()), new SimulationMap(mapGenerationUseCase.map()));
    }
}
