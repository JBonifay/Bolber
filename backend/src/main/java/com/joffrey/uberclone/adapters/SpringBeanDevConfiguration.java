package com.joffrey.uberclone.adapters;

import com.joffrey.uberclone.adapters.secondary.gateways.InMemoryTiledMapData;
import com.joffrey.uberclone.businesslogic.gateways.repositories.TiledMapData;
import com.joffrey.uberclone.businesslogic.usecases.map.MapManagementUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("dev")
@Configuration
public class SpringBeanDevConfiguration {

    @Bean
    public TiledMapData tiledMapData() {
        return new InMemoryTiledMapData();
    }

    @Bean
    public MapManagementUseCase mapManagementUseCase(final TiledMapData tiledMapData) {
        return new MapManagementUseCase(tiledMapData);
    }
    
}
