package com.joffrey.uberclone.configuration;

import com.joffrey.uberclone.businesslogic.usecases.MapGenerationUseCase;
import com.joffrey.uberclone.businesslogic.domain.csv.FakeCsvReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("dev")
@Configuration
public class BeanDevConfiguration {

    @Bean
    public MapGenerationUseCase bookRideUseCase() {
        FakeCsvReader fakeCsvReader = new FakeCsvReader(new String[][]{
                {"building", "1", "1", "1", "1", "#d77a61"}
        });
        MapGenerationUseCase mapGenerationUseCase = new MapGenerationUseCase();
        mapGenerationUseCase.generateMap(3, 3);
        mapGenerationUseCase.generateBlocksFromCsvInput(fakeCsvReader.readFile(null));
        return mapGenerationUseCase;
    }

}
