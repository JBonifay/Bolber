package com.joffrey.bolber.adapters.configuration;

import com.joffrey.bolber.RandomBookingProperties;
import com.joffrey.bolber.adapters.InMemoryBookingRepository;
import com.joffrey.bolber.adapters.secondary.SpringCustomerNotification;
import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.MapManagement;
import com.joffrey.bolber.business.ports.BookingRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDefaultConfiguration {

    @Bean
    public BookingRepository bookingRepository() {
        return new InMemoryBookingRepository();
    }

    @Bean
    public BookingManagement bookingManagement(DriverManagement driverManagement, SpringCustomerNotification springCustomerNotification, BookingRepository bookingRepository) {
        return new BookingManagement(bookingRepository, driverManagement, springCustomerNotification);
    }

    @Bean
    public RandomBookingProperties randomBookingProperties(MapManagement mapManagement) {
        return new RandomBookingProperties(mapManagement.map());
    }
}
