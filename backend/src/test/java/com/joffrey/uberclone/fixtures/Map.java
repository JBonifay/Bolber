package com.joffrey.uberclone.fixtures;

import com.joffrey.uberclone.businesslogic.models.Block;

import static com.joffrey.uberclone.businesslogic.models.BlockType.*;

public class Map {
    public static final Block R = new Block(ROAD, ROAD.getColor(), 0, 0);
    public static final Block B = new Block(BUILDING, BUILDING.getColor(), 0, 0);
    public static final Block I = new Block(RIVER, RIVER.getColor(), 0, 0);
    public static final Block P = new Block(PARK, PARK.getColor(), 0, 0);

}
