package com.joffrey.uberclone.adapters.configuration;

import com.joffrey.uberclone.businesslogic.ClockBookingScheduler;
import com.joffrey.uberclone.businesslogic.domain.booking.RandomBookingProperties;
import com.joffrey.uberclone.businesslogic.usecases.IBookingManagement;
import com.joffrey.uberclone.businesslogic.usecases.MapGeneration;
import com.joffrey.uberclone.businesslogic.domain.csv.FileCsvReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("prod")
@Configuration
public class BeanProdConfiguration {

    @Bean
    public ClockBookingScheduler clockBookingScheduler(IBookingManagement bookingManagement) {
        return new ClockBookingScheduler(bookingManagement, new RandomBookingProperties());
    }

    @Bean
    public MapGeneration bookRideUseCase() {
        FileCsvReader fileCsvReader = new FileCsvReader();
        MapGeneration mapGeneration = new MapGeneration();
        mapGeneration.generateMap(50, 50);
        mapGeneration.generateBlocksFromCsvInput(fileCsvReader.readFile("init.csv"));
        return mapGeneration;
    }
}
