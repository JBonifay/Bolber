package com.joffrey.bolber.fixtures;


import com.joffrey.bolber.business.domain.map.Block;

import static com.joffrey.bolber.business.domain.map.BlockType.*;

public class BlockFixtures {

    public static Block R(int x, int y) {
        return new Block(ROAD, ROAD.getColor(), x, y);
    }

    public static Block B(int x, int y) {
        return new Block(BUILDING, BUILDING.getColor(), x, y);
    }

    public static Block I(int x, int y) {
        return new Block(RIVER, RIVER.getColor(), x, y);
    }

    public static Block P(int x, int y) {
        return new Block(PARK, PARK.getColor(), x, y);
    }
}
