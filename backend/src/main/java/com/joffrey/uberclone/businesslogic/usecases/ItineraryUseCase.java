package com.joffrey.uberclone.businesslogic.usecases;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.models.Coordinates;
import com.joffrey.uberclone.businesslogic.models.pathfinding.PathFindingAlgorithm;

import java.util.List;

public class ItineraryUseCase {
    private final PathFindingAlgorithm pathFindingAlgorithm;

    public ItineraryUseCase(PathFindingAlgorithm pathFindingAlgorithm) {
        this.pathFindingAlgorithm = pathFindingAlgorithm;
    }

    public List<Coordinates> getItinerary(Block[] map, Coordinates startCoordinates, Coordinates endCoordinates) {
        return pathFindingAlgorithm.findShortestPath(map, startCoordinates, endCoordinates);
    }
}
