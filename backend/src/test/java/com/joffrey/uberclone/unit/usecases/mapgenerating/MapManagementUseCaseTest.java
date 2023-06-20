package com.joffrey.uberclone.unit.usecases.mapgenerating;

import com.joffrey.uberclone.businesslogic.usecases.map.MapManagementUseCase;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class MapManagementUseCaseTest {


    @Test
    public void shouldInitializeTiledMap() {
        MapManagementUseCase mapManagementUseCase = new MapManagementUseCase();

        mapManagementUseCase.initMapFromFile();
        
        assertEquals(50, mapManagementUseCase.getMap().gridCount());
        assertEquals(241, mapManagementUseCase.getMap().blocks().size());
    }
}