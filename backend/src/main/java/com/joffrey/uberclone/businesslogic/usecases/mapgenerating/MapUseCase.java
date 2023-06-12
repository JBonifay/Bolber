package com.joffrey.uberclone.businesslogic.usecases.mapgenerating;

import com.joffrey.uberclone.businesslogic.models.CityMap;
import com.joffrey.uberclone.businesslogic.gateways.mapproperties.MapProperties;
import com.joffrey.uberclone.businesslogic.gateways.repositories.MapRepository;

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
