package com.joffrey.uberclone.acceptance.configuration;

import com.joffrey.uberclone.adapters.InMemoryMapRepository;
import com.joffrey.uberclone.domain.ports.MapRepository;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;

@TestConfiguration
public class RepositoryConfiguration {

    @Bean
    public MapRepository mapRepository() {
        return new InMemoryMapRepository();
    }
    
}
