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
                {"building", "1", "2", "1", "2", "#d77a61"},
                {"building", "1", "1", "3", "3", "#d77a61"},
                {"building", "4", "5", "1", "3", "#d77a61"},
                {"building", "6", "6", "2", "3", "#d77a61"},
                {"building", "8", "8", "1", "1", "#d77a61"},
                {"building", "8", "8", "3", "3", "#d77a61"},
                {"building", "1", "1", "5", "5", "#d77a61"},
                {"building", "3", "3", "5", "5", "#d77a61"},
                {"building", "5", "5", "5", "5", "#d77a61"},
                {"building", "6", "8", "5", "6", "#d77a61"},
                {"building", "7", "8", "7", "7", "#d77a61"},
                {"building", "7", "7", "8", "8", "#d77a61"},
                {"building", "1", "1", "7", "8", "#d77a61"},
                {"building", "3", "4", "7", "8", "#d77a61"},
                {"building", "5", "5", "8", "8", "#d77a61"}
        });
        BookRideUseCase bookRideUseCase = new BookRideUseCase();
        bookRideUseCase.generateMap(10, 10);
        bookRideUseCase.generateBlocksFromCsvInput(fakeCsvReader.readFile(null));
        return bookRideUseCase;
    }

}
