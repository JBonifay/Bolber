package com.joffrey.uberclone.usecases;

import com.joffrey.uberclone.domain.Block;
import com.joffrey.uberclone.domain.repositories.MapRepository;

import java.util.List;

public class MapUseCase {
    private final MapRepository mapRepository;

    public MapUseCase(MapRepository mapRepository) {
        this.mapRepository = mapRepository;
    }

    public List<Block> map() {
        return mapRepository.getBlocks();
    }
}
