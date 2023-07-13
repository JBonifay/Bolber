package com.joffrey.bolber.adapters.configuration;

import com.joffrey.bolber.RandomBookingProperties;
import com.joffrey.bolber.adapters.InMemoryBookingRepository;
import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.DriverManagement;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDefaultConfiguration {

    @Bean
    public BookingManagement bookingManagement(DriverManagement driverManagement) {
        return new BookingManagement(new InMemoryBookingRepository(), driverManagement);
    }

    @Bean
    public RandomBookingProperties randomBookingProperties() {
        return new RandomBookingProperties();
    }
}
