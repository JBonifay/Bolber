package com.joffrey.bolber.integration;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
public class DriverControllerIT extends AbstractIntegrationTest {

    @Autowired
    private MockMvc mvc;


    @Test
    void should_return_drivers() throws Exception {
        mvc.perform(get("/api/drivers")
                        .contentType(APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content()
                        .json("""
                                [
                                  {
                                    "driverId": "bbd54a9b-e07c-4026-8199-bd2eee6b17de",
                                    "status": "WAITING_FOR_RIDE",
                                    "coordinates": {
                                      "horizontal": 0,
                                      "vertical": 0
                                    }
                                  }
                                ]"""));
    }
}
