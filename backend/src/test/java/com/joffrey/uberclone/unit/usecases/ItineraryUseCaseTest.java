package com.joffrey.uberclone.unit.usecases;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.models.Coordinates;
import com.joffrey.uberclone.businesslogic.usecases.ItineraryUseCase;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;

import static com.joffrey.uberclone.fixtures.Map.I;
import static com.joffrey.uberclone.fixtures.Map.R;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ItineraryUseCaseTest {

    private final ItineraryUseCase pathFindingUseCase = new ItineraryUseCase();

    @Test
    void should_answer_empty_itinerary_if_not_found() {
        assertItineraryIsTheShortest(new Block[][]{
                        {I, I, I, I},
                        {I, I, I, I},
                        {I, I, I, I},
                        {I, I, I, I},
                },
                new Coordinates(0, 0),
                new Coordinates(0, 3),
                Collections.emptyList());
    }

    @Test
    void should_find_shortest_itinerary() {

        assertItineraryIsTheShortest(new Block[][]{
                        {R, R}},
                new Coordinates(0, 0),
                new Coordinates(0, 1),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(0, 1)
                ));

        assertItineraryIsTheShortest(new Block[][]{
                        {R, R, R, R}},
                new Coordinates(0, 0),
                new Coordinates(0, 3),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(0, 1),
                        new Coordinates(0, 2),
                        new Coordinates(0, 3)
                ));

        assertItineraryIsTheShortest(new Block[][]{
                        {R},
                        {R}},
                new Coordinates(0, 0),
                new Coordinates(1, 0),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0)
                ));

        assertItineraryIsTheShortest(new Block[][]{
                        {R},
                        {R},
                        {R},
                        {R}},
                new Coordinates(0, 0),
                new Coordinates(3, 0),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0),
                        new Coordinates(2, 0),
                        new Coordinates(3, 0)
                ));

        assertItineraryIsTheShortest(new Block[][]{
                        {R, R, R},
                        {R, R, R}
                },
                new Coordinates(0, 0),
                new Coordinates(1, 2),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0),
                        new Coordinates(1, 1),
                        new Coordinates(1, 2)
                ));

        assertItineraryIsTheShortest(new Block[][]{
                        {R, I, R, R, R},
                        {R, R, R, I, R},
                        {R, R, R, I, R},
                        {I, I, I, I, R},
                        {R, R, R, R, R}
                }, new Coordinates(0, 0),
                new Coordinates(4, 4),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0),
                        new Coordinates(1, 1),
                        new Coordinates(1, 2),
                        new Coordinates(0, 2),
                        new Coordinates(0, 3),
                        new Coordinates(0, 4),
                        new Coordinates(1, 4),
                        new Coordinates(2, 4),
                        new Coordinates(3, 4),
                        new Coordinates(4, 4)
                ));
    }

    private void assertItineraryIsTheShortest(Block[][] map, Coordinates startCoordinates, Coordinates endCoordinates, List<Coordinates> expected) {
        assertEquals(expected, pathFindingUseCase.getItinerary(map, startCoordinates, endCoordinates));
    }
}