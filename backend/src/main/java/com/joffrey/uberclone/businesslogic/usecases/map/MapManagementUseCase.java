package com.joffrey.uberclone.businesslogic.usecases.map;

import com.joffrey.uberclone.businesslogic.csv.CsvFileReader;
import com.joffrey.uberclone.businesslogic.models.TiledMap;

public class MapManagementUseCase {

    private TiledMap tiledMap;

    public void initMapFromFile() {
        CsvFileReader csvFileReader = new CsvFileReader();
        tiledMap = new TiledMap(50, csvFileReader.content("init.csv"));
    }

    public TiledMap getMap() {
        return tiledMap;
    }
}

