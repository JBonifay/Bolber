package com.joffrey.uberclone.adapters.configuration;

import com.joffrey.uberclone.businesslogic.usecases.MapGeneration;
import com.joffrey.uberclone.businesslogic.domain.csv.FakeCsvReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("dev")
@Configuration
public class BeanDevConfiguration {

    @Bean
    public MapGeneration bookRideUseCase() {
        FakeCsvReader fakeCsvReader = new FakeCsvReader(new String[][]{
                {"building", "1", "1", "1", "1", "#d77a61"}
        });
        MapGeneration mapGeneration = new MapGeneration();
        mapGeneration.generateMap(3, 3);
        mapGeneration.generateBlocksFromCsvInput(fakeCsvReader.readFile(null));
        return mapGeneration;
    }

}
