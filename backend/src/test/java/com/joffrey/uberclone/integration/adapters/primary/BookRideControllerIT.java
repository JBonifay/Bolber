package com.joffrey.uberclone.integration.adapters.primary;

import com.joffrey.uberclone.businesslogic.models.Coordinates;
import com.joffrey.uberclone.integration.adapters.AbstractIntegrationTest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;

import static com.joffrey.uberclone.adapters.primary.springboot.controllers.BookRideController.ItineraryRequest;
import static org.springframework.http.HttpHeaders.ACCEPT;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

public class BookRideControllerIT extends AbstractIntegrationTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    void shouldReturnGeoMap() {
        webTestClient
                .get()
                .uri("/api/map")
                .header(ACCEPT, APPLICATION_JSON_VALUE)
                .exchange()
                .expectStatus()
                .is2xxSuccessful()
                .expectHeader()
                .contentType(APPLICATION_JSON)
                .expectBody()
                .json("""
                        {
                          "blocks": [
                            [
                              {
                                "type": "ROAD",
                                "color": "#f5f5f5"
                              },
                              {
                                "type": "ROAD",
                                "color": "#f5f5f5"
                              },
                              {
                                "type": "ROAD",
                                "color": "#f5f5f5"
                              }
                            ],
                            [
                              {
                                "type": "ROAD",
                                "color": "#f5f5f5"
                              },
                              {
                                "type": "BUILDING",
                                "color": "#d77a61"
                              },
                              {
                                "type": "ROAD",
                                "color": "#f5f5f5"
                              }
                            ],
                            [
                              {
                                "type": "ROAD",
                                "color": "#f5f5f5"
                              },
                              {
                                "type": "ROAD",
                                "color": "#f5f5f5"
                              },
                              {
                                "type": "ROAD",
                                "color": "#f5f5f5"
                              }
                            ]
                          ]
                        }""");
    }

    @Test
    void shouldReturnItinerary() {
        ItineraryRequest request = new ItineraryRequest(new Coordinates(0, 0), new Coordinates(2, 2));

        webTestClient.post().uri("/api/itinerary")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(request)
                .exchange()
                .expectStatus().isOk()
                .expectBody()
                .json("""
                        [
                          {
                            "vertical": 0,
                            "horizontal": 0
                          },
                          {
                            "vertical": 1,
                            "horizontal": 0
                          },
                          {
                            "vertical": 2,
                            "horizontal": 0
                          },
                          {
                            "vertical": 2,
                            "horizontal": 1
                          },
                          {
                            "vertical": 2,
                            "horizontal": 2
                          }
                        ]
                        """);
    }
}
