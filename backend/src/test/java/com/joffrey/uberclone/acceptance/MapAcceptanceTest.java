package com.joffrey.uberclone.acceptance;

import com.joffrey.uberclone.domain.repositories.MapRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

import static org.springframework.http.HttpHeaders.ACCEPT;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class MapAcceptanceTest {

    @Autowired
    private WebTestClient webTestClient;

    @Autowired
    private MapRepository mapRepository;

    @Test
    void shouldReturnRoadCoordinates() {
        mapRepository.insertBlock("buildings", 19, 23, 4, 10, "#70A288");
        mapRepository.insertBlock("river", 0, 7, 21, 21, "#3185FC");
        mapRepository.insertBlock("park", 33, 34, 24, 30, "#70A288");

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
                              "blockType": "buildings",
                              "xStart": 19,
                              "xEnd": 23,
                              "yStart": 4,
                              "yEnd": 10,
                              "color": "#70A288"
                            },
                            {
                              "blockType": "river",
                              "xStart": 0,
                              "xEnd": 7,
                              "yStart": 21,
                              "yEnd": 21,
                              "color": "#3185FC"
                            },
                            {
                              "blockType": "park",
                              "xStart": 33,
                              "xEnd": 34,
                              "yStart": 24,
                              "yEnd": 30,
                              "color": "#70A288"
                            }
                          ]
                        """);
    }
}
