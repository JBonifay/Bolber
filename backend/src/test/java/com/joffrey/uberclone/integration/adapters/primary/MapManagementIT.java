package com.joffrey.uberclone.integration.adapters.primary;

import com.joffrey.uberclone.adapters.secondary.gateways.InMemoryTiledMapData;
import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.usecases.map.BlockType;
import com.joffrey.uberclone.integration.adapters.AbstractIntegrationTest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

import static org.springframework.http.HttpHeaders.ACCEPT;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class MapManagementIT extends AbstractIntegrationTest {

    @Autowired
    private WebTestClient webTestClient;

    @Autowired
    private InMemoryTiledMapData inMemoryTiledMapData;

    @BeforeEach
    void setUp() {
        inMemoryTiledMapData.insertBlock(new Block(BlockType.valueOf("buildings"), 19, 23, 4, 10, "#70A288"));
        inMemoryTiledMapData.insertBlock(new Block(BlockType.valueOf("river"), 0, 7, 21, 21, "#3185FC"));
        inMemoryTiledMapData.insertBlock(new Block(BlockType.valueOf("park"), 33, 34, 24, 30, "#70A288"));
    }

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
                        {
                          "gridCount": 50,
                          "blocks": [
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
                        }
                        """);
    }
}
