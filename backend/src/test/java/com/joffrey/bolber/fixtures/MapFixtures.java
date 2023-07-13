package com.joffrey.bolber.fixtures;

import com.joffrey.bolber.business.MapManagement;
import com.joffrey.bolber.business.domain.csv.FileCsvReader;
import com.joffrey.bolber.business.domain.map.Block;

public class MapFixtures {

    public static Block[] map() {
        MapManagement mapManagement = new MapManagement();
        mapManagement.generateMap(50, 50);
        mapManagement.generateBlocksFromCsvInput(new FileCsvReader().readFile("init.csv"));
        return mapManagement.map();
    }
}

