package com.joffrey.uberclone.configuration;

import com.joffrey.uberclone.domain.repositories.MapRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertFalse;

@ActiveProfiles("initial-data")
@SpringBootTest
class InitialDataConfigurationTest {

    @Autowired
    private MapRepository mapRepository;

    @Test
    void shouldLoadInitialData() {
        assertFalse(mapRepository.getBlocks().isEmpty());
    }
}