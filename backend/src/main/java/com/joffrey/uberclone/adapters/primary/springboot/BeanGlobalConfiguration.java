package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.models.pathfinding.BFS;
import com.joffrey.uberclone.businesslogic.models.pathfinding.NeighborFinder;
import com.joffrey.uberclone.businesslogic.models.pathfinding.PathReconstruct;
import com.joffrey.uberclone.businesslogic.usecases.ItineraryUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanGlobalConfiguration {

    @Bean
    public ItineraryUseCase itineraryUseCase() {
        return new ItineraryUseCase(new BFS(new NeighborFinder(), new PathReconstruct()));
    }
}
