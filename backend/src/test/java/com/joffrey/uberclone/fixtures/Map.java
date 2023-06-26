package com.joffrey.uberclone.fixtures;

import com.joffrey.uberclone.businesslogic.models.Block;

import static com.joffrey.uberclone.businesslogic.models.BlockType.*;

public class Map {
    public static final Block R = new Block(ROAD.name(), ROAD.getColor());
    public static final Block B = new Block(BUILDING.name(), BUILDING.getColor());
    public static final Block I = new Block(RIVER.name(), RIVER.getColor());
    public static final Block P = new Block(PARK.name(), PARK.getColor());
    
}
