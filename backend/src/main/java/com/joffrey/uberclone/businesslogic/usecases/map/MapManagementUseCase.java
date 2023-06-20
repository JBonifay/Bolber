package com.joffrey.uberclone.businesslogic.usecases.map;

import com.joffrey.uberclone.businesslogic.gateways.repositories.TiledMapData;
import com.joffrey.uberclone.businesslogic.models.TiledMap;

public class MapManagementUseCase {

    private final TiledMap tiledMap;

    public MapManagementUseCase(final TiledMapData tiledMapData) {
        tiledMap = new TiledMap(50, tiledMapData.getBlocks());
    }

    public TiledMap getMap() {
        return tiledMap;
    }
}

