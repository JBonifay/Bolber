package com.joffrey.uberclone.e2e;

import com.joffrey.uberclone.businesslogic.models.Coordinates;
import com.joffrey.uberclone.businesslogic.models.GeoMap;
import com.joffrey.uberclone.businesslogic.usecases.ItineraryUseCase;
import com.joffrey.uberclone.businesslogic.usecases.MapGenerationUseCase;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BookARideIT {

    @Test
    void client_book_a_ride() {
        // Given
        // a map of 10x10 with buildings, rivers and parks,
        MapGenerationUseCase mapGenerationUseCase = new MapGenerationUseCase();
        mapGenerationUseCase.generateMap(10, 10);
        GeoMap map = mapGenerationUseCase.map();
        // Drivers are present on the map and waiting for clients
        // When
        // a user books a ride from A to destination B
        ItineraryUseCase itineraryUseCase = new ItineraryUseCase();
        List<Coordinates> itinerary = itineraryUseCase.findShortestPath(map.blocks(), new Coordinates(0, 0), new Coordinates(9, 9));

        // Then
        // driver should go to the client
        // driver should transport him to the destination using the shortest path available
        assertEquals(List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0),
                        new Coordinates(2, 0),
                        new Coordinates(3, 0),
                        new Coordinates(4, 0),
                        new Coordinates(5, 0),
                        new Coordinates(6, 0),
                        new Coordinates(7, 0),
                        new Coordinates(8, 0),
                        new Coordinates(9, 0),
                        new Coordinates(9, 1),
                        new Coordinates(9, 2),
                        new Coordinates(9, 3),
                        new Coordinates(9, 4),
                        new Coordinates(9, 5),
                        new Coordinates(9, 6),
                        new Coordinates(9, 7),
                        new Coordinates(9, 8),
                        new Coordinates(9, 9)
                ),
                itinerary);
    }
}
