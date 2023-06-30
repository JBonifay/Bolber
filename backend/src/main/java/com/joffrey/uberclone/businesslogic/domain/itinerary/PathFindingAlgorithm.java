package com.joffrey.uberclone.businesslogic.domain.itinerary;

import com.joffrey.uberclone.businesslogic.domain.map.Block;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.List;

public abstract class PathFindingAlgorithm {

    protected final NeighborFinder neighborFinder;
    protected final PathReconstruct pathReconstruct;

    protected PathFindingAlgorithm(NeighborFinder neighborFinder, PathReconstruct pathReconstruct) {
        this.neighborFinder = neighborFinder;
        this.pathReconstruct = pathReconstruct;
    }


    public abstract List<Coordinates> findShortestPath(Block[] map, Coordinates startCoordinates, Coordinates endCoordinates);
}
