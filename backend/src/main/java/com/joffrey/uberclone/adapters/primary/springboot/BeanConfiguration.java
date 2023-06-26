package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.usecases.MapGenerationUseCase;
import com.joffrey.uberclone.businesslogic.models.csv.FileCsvReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("prod")
@Configuration
public class BeanConfiguration {

    @Bean
    public MapGenerationUseCase bookRideUseCase() {
        FileCsvReader fileCsvReader = new FileCsvReader();
        MapGenerationUseCase mapGenerationUseCase = new MapGenerationUseCase();
        mapGenerationUseCase.generateMap(50,50);
        mapGenerationUseCase.generateBlocksFromCsvInput(fileCsvReader.readFile("init.csv"));
        return mapGenerationUseCase;
    }
}
