package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.usecases.bookride.BookRideUseCase;
import com.joffrey.uberclone.businesslogic.usecases.bookride.csv.FakeCsvReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("dev")
@Configuration
public class BeanDevConfiguration {

    @Bean
    public BookRideUseCase bookRideUseCase() {
        FakeCsvReader fakeCsvReader = new FakeCsvReader(new String[][]{
                {"building", "1", "1", "1", "1", "#d77a61"}
        });
        BookRideUseCase bookRideUseCase = new BookRideUseCase();
        bookRideUseCase.generateMap(3, 3);
        bookRideUseCase.generateBlocksFromCsvInput(fakeCsvReader.readFile(null));
        return bookRideUseCase;
    }

}
