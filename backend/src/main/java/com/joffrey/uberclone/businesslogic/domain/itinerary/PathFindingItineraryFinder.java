package com.joffrey.uberclone.businesslogic.domain.itinerary;

import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.domain.map.SimulationMap;

import java.util.List;

public class PathFindingItineraryFinder implements ItineraryFinder {

    private final PathFindingAlgorithm pathFindingAlgorithm;
    private final SimulationMap map;

    public PathFindingItineraryFinder(PathFindingAlgorithm pathFindingAlgorithm, SimulationMap map) {
        this.pathFindingAlgorithm = pathFindingAlgorithm;
        this.map = map;
    }

    @Override
    public Itinerary findShortestItinerary(Coordinates startCoordinates, Coordinates endCoordinates) {
        List<Coordinates> shortestPath = pathFindingAlgorithm.findShortestPath(map.blocks(), startCoordinates, endCoordinates);
        return new Itinerary(shortestPath);
    }
}
