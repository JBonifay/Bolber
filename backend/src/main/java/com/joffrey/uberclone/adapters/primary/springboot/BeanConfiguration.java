package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.usecases.bookride.BookRideUseCase;
import com.joffrey.uberclone.businesslogic.usecases.bookride.csv.FileCsvReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("prod")
@Configuration
public class BeanConfiguration {

    @Bean
    public BookRideUseCase bookRideUseCase() {
        FileCsvReader fileCsvReader = new FileCsvReader();
        BookRideUseCase bookRideUseCase = new BookRideUseCase();
        bookRideUseCase.generateMap(50,50);
        bookRideUseCase.generateBlocksFromCsvInput(fileCsvReader.readFile("init.csv"));
        return bookRideUseCase;
    }
}
