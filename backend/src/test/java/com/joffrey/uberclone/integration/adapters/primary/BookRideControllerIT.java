package com.joffrey.uberclone.integration.adapters.primary;

import com.joffrey.uberclone.integration.adapters.AbstractIntegrationTest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.reactive.server.WebTestClient;

import static org.springframework.http.HttpHeaders.ACCEPT;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

public class BookRideControllerIT extends AbstractIntegrationTest {

    @Autowired
    private WebTestClient webTestClient;

    @Test
    void shouldReturnTiledMapData() {
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
                          [
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD"
                          ],
                          [
                            "ROAD",
                            "BUILDING",
                            "BUILDING",
                            "ROAD",
                            "BUILDING",
                            "BUILDING",
                            "ROAD",
                            "ROAD",
                            "BUILDING",
                            "ROAD"
                          ],
                          [
                            "ROAD",
                            "BUILDING",
                            "BUILDING",
                            "ROAD",
                            "BUILDING",
                            "BUILDING",
                            "BUILDING",
                            "ROAD",
                            "ROAD",
                            "ROAD"
                          ],
                          [
                            "ROAD",
                            "BUILDING",
                            "ROAD",
                            "ROAD",
                            "BUILDING",
                            "BUILDING",
                            "BUILDING",
                            "ROAD",
                            "BUILDING",
                            "ROAD"
                          ],
                          [
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD"
                          ],
                          [
                            "ROAD",
                            "BUILDING",
                            "ROAD",
                            "BUILDING",
                            "ROAD",
                            "BUILDING",
                            "BUILDING",
                            "BUILDING",
                            "BUILDING",
                            "ROAD"
                          ],
                          [
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "BUILDING",
                            "BUILDING",
                            "BUILDING",
                            "ROAD"
                          ],
                          [
                            "ROAD",
                            "BUILDING",
                            "ROAD",
                            "BUILDING",
                            "BUILDING",
                            "ROAD",
                            "ROAD",
                            "BUILDING",
                            "BUILDING",
                            "ROAD"
                          ],
                          [
                            "ROAD",
                            "BUILDING",
                            "ROAD",
                            "BUILDING",
                            "BUILDING",
                            "BUILDING",
                            "ROAD",
                            "BUILDING",
                            "ROAD",
                            "ROAD"
                          ],
                          [
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD",
                            "ROAD"
                          ]
                        ]
                        """);
    }
}
