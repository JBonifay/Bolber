package com.joffrey.uberclone.configuration;

import com.joffrey.uberclone.adapters.repositories.InMemoryMapRepository;
import com.joffrey.uberclone.domain.repositories.MapRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RepositoryConfiguration {

    @Bean
    public MapRepository mapRepository() {
        return new InMemoryMapRepository();
    }
}
