package com.joffrey.uberclone.usecases;

import com.joffrey.uberclone.domain.Map;
import com.joffrey.uberclone.domain.repositories.MapRepository;

public class MapUseCase {
    private final MapRepository mapRepository;

    public MapUseCase(MapRepository mapRepository) {
        this.mapRepository = mapRepository;
    }

    public Map map() {
        return new Map(mapRepository.getBlocks());
    }
}
