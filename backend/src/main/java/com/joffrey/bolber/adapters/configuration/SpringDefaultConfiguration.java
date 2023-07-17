package com.joffrey.bolber.adapters.configuration;

import com.joffrey.bolber.RandomBookingProperties;
import com.joffrey.bolber.adapters.InMemoryBookingRepository;
import com.joffrey.bolber.adapters.secondary.SpringCustomerNotification;
import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.MapManagement;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDefaultConfiguration {

    @Bean
    public BookingManagement bookingManagement(DriverManagement driverManagement, SpringCustomerNotification springCustomerNotification) {
        return new BookingManagement(new InMemoryBookingRepository(), driverManagement, springCustomerNotification);
    }

    @Bean
    public RandomBookingProperties randomBookingProperties(MapManagement mapManagement) {
        return new RandomBookingProperties(mapManagement.map());
    }
}
