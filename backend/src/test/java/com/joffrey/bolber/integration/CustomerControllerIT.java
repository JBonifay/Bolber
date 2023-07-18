package com.joffrey.bolber.integration;

import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.ports.BookingRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

import java.util.UUID;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
public class CustomerControllerIT extends AbstractIntegrationTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private BookingRepository bookingRepository;

    @Test
    void should_return_customers_waiting_for_driver() throws Exception {
        bookingRepository.save(new Booking(UUID.fromString("85be2ea7-ee9a-4a56-98f6-7129f92188e7"), new Coordinates(0, 0), null));
        bookingRepository.save(new Booking(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), new Coordinates(4, 2), null));

        mvc.perform(get("/api/customers")
                        .contentType(APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content()
                        .json("""
                                [
                                  {
                                    "customerId": "85be2ea7-ee9a-4a56-98f6-7129f92188e7",
                                    "customerDepartureCoordinates": {
                                      "horizontal": 0,
                                      "vertical": 0
                                    }
                                  },
                                  {
                                    "customerId": "bbd54a9b-e07c-4026-8199-bd2eee6b17de",
                                    "customerDepartureCoordinates": {
                                      "horizontal": 4,
                                      "vertical": 2
                                    }
                                  }
                                ]"""));
    }
}
