package com.joffrey.uberclone.usecases;

import com.joffrey.uberclone.adapters.repositories.InMemoryMapRepository;
import com.joffrey.uberclone.domain.Block;
import com.joffrey.uberclone.domain.repositories.MapRepository;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class MapUseCaseTest {

    private final MapRepository mapRepository = new InMemoryMapRepository();
    private final MapUseCase mapUseCase = new MapUseCase(mapRepository);

    @Test
    public void shouldReturnMapWithParkBlocks() {
        mapRepository.insertBlock("park", 19, 23, 4, 10, "#70A288");
        mapRepository.insertBlock("park", 33, 34, 24, 30, "#70A288");

        assertEquals(List.of(
                new Block("park", 19, 23, 4, 10, "#70A288"),
                new Block("park", 33, 34, 24, 30, "#70A288")
        ), mapUseCase.map());
    }


    @Test
    public void shouldReturnMapWithBuildingBlocks() {
        mapRepository.insertBlock("building", 1, 5, 1, 2, "#d77a61");
        mapRepository.insertBlock("building", 1, 5, 4, 5, "#d77a61");

        assertEquals(List.of(
                new Block("building", 1, 5, 1, 2, "#d77a61"),
                new Block("building", 1, 5, 4, 5, "#d77a61")
        ), mapUseCase.map());
    }

    @Test
    public void shouldReturnMapWithRiverBlocks() {
        mapRepository.insertBlock("river", 0, 7, 21, 21, "#3185FC");
        mapRepository.insertBlock("river", 9, 25, 21, 21, "#3185FC");

        assertEquals(List.of(
                new Block("river", 0, 7, 21, 21, "#3185FC"),
                new Block("river", 9, 25, 21, 21, "#3185FC")
        ), mapUseCase.map());

    }
}