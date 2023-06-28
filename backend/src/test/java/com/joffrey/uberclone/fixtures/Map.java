package com.joffrey.uberclone.fixtures;

import com.joffrey.uberclone.businesslogic.models.Block;

import static com.joffrey.uberclone.businesslogic.models.BlockType.*;

public class Map {
    public static final Block R = new Block(ROAD, 0,0);
    public static final Block B = new Block(BUILDING,  0,0);
    public static final Block I = new Block(RIVER,  0,0);
    public static final Block P = new Block(PARK,  0,0);

}
