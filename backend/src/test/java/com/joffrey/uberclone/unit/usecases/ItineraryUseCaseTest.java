package com.joffrey.uberclone.unit.usecases;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.models.Coordinates;
import com.joffrey.uberclone.businesslogic.usecases.ItineraryUseCase;
import org.junit.jupiter.api.Test;

import java.util.List;

import static com.joffrey.uberclone.fixtures.BlockFixtures.I;
import static com.joffrey.uberclone.fixtures.BlockFixtures.R;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ItineraryUseCaseTest {

    private final ItineraryUseCase pathFindingUseCase = new ItineraryUseCase();

    @Test
    void should_find_shortest_itinerary() {
        assertItineraryIsTheShortest(new Block[]{
                        I(0, 0), I(0, 0), I(0, 0), I(0, 0),
                        I(0, 0), I(0, 0), I(0, 0), I(0, 0),
                        I(0, 0), I(0, 0), I(0, 0), I(0, 0),
                        I(0, 0), I(0, 0), I(0, 0), I(0, 0),
                },
                new Coordinates(0, 0),
                new Coordinates(3, 0),
                List.of(new Coordinates(0, 0)));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0), R(1, 0)
                },
                new Coordinates(0, 0),
                new Coordinates(1, 0),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0)
                ));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0), R(1, 0), R(2, 0), R(3, 0)
                },
                new Coordinates(0, 0),
                new Coordinates(3, 0),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0),
                        new Coordinates(2, 0),
                        new Coordinates(3, 0)
                ));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0),
                        R(0, 1)
                },
                new Coordinates(0, 0),
                new Coordinates(0, 1),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(0, 1)
                ));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0),
                        R(0, 1),
                        R(0, 2),
                        R(0, 3)
                },
                new Coordinates(0, 0),
                new Coordinates(0, 3),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(0, 1),
                        new Coordinates(0, 2),
                        new Coordinates(0, 3)
                ));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0), R(1, 0), R(2, 0),
                        R(0, 1), R(1, 1), R(2, 1),

                },
                new Coordinates(0, 0),
                new Coordinates(2, 1),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0),
                        new Coordinates(2, 0),
                        new Coordinates(2, 1)
                ));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0), I(1, 0), R(2, 0), R(3, 0), R(4, 0),
                        R(0, 1), R(1, 1), R(2, 1), I(3, 1), R(4, 1),
                        R(0, 2), R(1, 2), R(2, 2), I(3, 2), R(4, 2),
                        I(0, 3), I(1, 3), I(2, 3), I(3, 3), R(4, 3),
                        R(0, 4), R(1, 4), R(2, 4), R(3, 4), R(4, 4),

                },
                new Coordinates(0, 0),
                new Coordinates(4, 4),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(0, 1),
                        new Coordinates(1, 1),
                        new Coordinates(2, 1),
                        new Coordinates(2, 0),
                        new Coordinates(3, 0),
                        new Coordinates(4, 0),
                        new Coordinates(4, 1),
                        new Coordinates(4, 2),
                        new Coordinates(4, 3),
                        new Coordinates(4, 4)
                ));
    }

    private void assertItineraryIsTheShortest(Block[] map, Coordinates startCoordinates, Coordinates endCoordinates, List<Coordinates> expected) {
        assertEquals(expected, pathFindingUseCase.getItinerary(map, startCoordinates, endCoordinates));
    }
}