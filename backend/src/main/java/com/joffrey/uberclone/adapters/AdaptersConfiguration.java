package com.joffrey.uberclone.adapters;

import com.joffrey.uberclone.adapters.secondary.gateways.mapproperties.InMemoryMapProperties;
import com.joffrey.uberclone.adapters.secondary.gateways.repositories.InMemoryMapRepository;
import com.joffrey.uberclone.businesslogic.gateways.mapproperties.MapProperties;
import com.joffrey.uberclone.businesslogic.gateways.repositories.MapRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AdaptersConfiguration {

    @Bean
    public MapProperties mapProperties() {
        return new InMemoryMapProperties();
    }

    @Bean
    public MapRepository mapRepository() {
        return new InMemoryMapRepository();
    }
}
