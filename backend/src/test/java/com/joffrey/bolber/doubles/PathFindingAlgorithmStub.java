package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.map.Block;
import com.joffrey.bolber.business.domain.pathfinding.PathFindingAlgorithm;

import java.util.List;

public class PathFindingAlgorithmStub extends PathFindingAlgorithm {
    @Override
    public List<Coordinates> findShortestPath(Block[] map, Coordinates startCoordinates, Coordinates endCoordinates) {
        return List.of();
    }
}
