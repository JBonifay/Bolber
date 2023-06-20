package com.joffrey.uberclone.adapters;

import com.joffrey.uberclone.adapters.secondary.gateways.CsvFileTiledMapData;
import com.joffrey.uberclone.businesslogic.gateways.repositories.TiledMapData;
import com.joffrey.uberclone.businesslogic.usecases.map.MapManagementUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("prod")
@Configuration
public class SpringBeanConfiguration {

    @Bean
    public TiledMapData tiledMapData() {
        return new CsvFileTiledMapData();
    }
    
    @Bean
    public MapManagementUseCase mapManagementUseCase(final TiledMapData tiledMapData) {
        return new MapManagementUseCase(tiledMapData);
    }
}
