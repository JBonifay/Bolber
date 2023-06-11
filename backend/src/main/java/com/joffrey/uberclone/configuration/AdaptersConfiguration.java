package com.joffrey.uberclone.configuration;

import com.joffrey.uberclone.adapters.InMemoryMapProperties;
import com.joffrey.uberclone.adapters.InMemoryMapRepository;
import com.joffrey.uberclone.domain.ports.MapProperties;
import com.joffrey.uberclone.domain.ports.MapRepository;
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
