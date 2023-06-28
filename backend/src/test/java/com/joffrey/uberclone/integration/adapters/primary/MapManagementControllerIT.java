package com.joffrey.uberclone.integration.adapters.primary;

import com.joffrey.uberclone.businesslogic.models.Coordinates;
import com.joffrey.uberclone.integration.adapters.AbstractIntegrationTest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;

import static com.joffrey.uberclone.adapters.primary.springboot.controllers.MapManagementController.ItineraryRequest;
import static org.springframework.http.HttpHeaders.ACCEPT;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

public class MapManagementControllerIT extends AbstractIntegrationTest {

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
                        [
                          {
                            "blockType": "ROAD",
                            "color": "#f5f5f5",
                            "x": 0,
                            "y": 0
                          },
                          {
                            "blockType": "ROAD",
                            "color": "#f5f5f5",
                            "x": 1,
                            "y": 0
                          },
                          {
                            "blockType": "ROAD",
                            "color": "#f5f5f5",
                            "x": 2,
                            "y": 0
                          },
                          {
                            "blockType": "ROAD",
                            "color": "#f5f5f5",
                            "x": 0,
                            "y": 1
                          },
                          {
                            "blockType": "BUILDING",
                            "color": "#d77a61",
                            "x": 1,
                            "y": 1
                          },
                          {
                            "blockType": "ROAD",
                            "color": "#f5f5f5",
                            "x": 2,
                            "y": 1
                          },
                          {
                            "blockType": "ROAD",
                            "color": "#f5f5f5",
                            "x": 0,
                            "y": 2
                          },
                          {
                            "blockType": "ROAD",
                            "color": "#f5f5f5",
                            "x": 1,
                            "y": 2
                          },
                          {
                            "blockType": "ROAD",
                            "color": "#f5f5f5",
                            "x": 2,
                            "y": 2
                          }
                        ]
                        """);
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
