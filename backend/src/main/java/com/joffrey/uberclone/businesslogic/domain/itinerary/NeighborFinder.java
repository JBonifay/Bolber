package com.joffrey.uberclone.businesslogic.domain.itinerary;

import com.joffrey.uberclone.businesslogic.domain.map.Block;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.ArrayList;
import java.util.List;

public class NeighborFinder {

    public List<Block> getNeighbors(Block[] map, Coordinates coordinates) {
        List<Block> neighbors = new ArrayList<>();

        for (Block block : map) {
            if ((Math.abs(block.x() - coordinates.horizontal()) == 1 && block.y() == coordinates.vertical())
                || (Math.abs(block.y() - coordinates.vertical()) == 1 && block.x() == coordinates.horizontal())) {
                neighbors.add(block);
            }
        }

        return neighbors;
    }

}
