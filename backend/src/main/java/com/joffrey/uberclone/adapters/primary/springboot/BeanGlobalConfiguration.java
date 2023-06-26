package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.usecases.ItineraryUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanGlobalConfiguration {

    @Bean
    public ItineraryUseCase itineraryUseCase() {
        return new ItineraryUseCase();
    }
}
