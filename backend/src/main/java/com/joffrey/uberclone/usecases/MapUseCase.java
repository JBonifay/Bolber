package com.joffrey.uberclone.usecases;

import com.joffrey.uberclone.domain.Block;
import com.joffrey.uberclone.domain.CityMap;
import com.joffrey.uberclone.domain.ports.MapProperties;
import com.joffrey.uberclone.domain.ports.MapRepository;

import java.util.List;

public class MapUseCase {
    private final MapProperties mapProperties;
    private final MapRepository mapRepository;

    public MapUseCase(MapProperties mapProperties, MapRepository mapRepository) {
        this.mapProperties = mapProperties;
        this.mapRepository = mapRepository;
    }

    public CityMap map() {
        return new CityMap(mapProperties.getSideSize(), mapRepository.getBlocks());
    }
}
