package com.joffrey.bolber.business.domain.pathfinding;

import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.map.Block;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public abstract class PathFindingAlgorithm {


    public abstract List<Coordinates> findShortestPath(Block[] map, Coordinates startCoordinates, Coordinates endCoordinates);

    protected List<Block> getNeighbors(Block[] map, Coordinates coordinates) {
        List<Block> neighbors = new ArrayList<>();

        for (Block block : map) {
            if ((Math.abs(block.x() - coordinates.horizontal()) == 1 && block.y() == coordinates.vertical())
                    || (Math.abs(block.y() - coordinates.vertical()) == 1 && block.x() == coordinates.horizontal())) {
                neighbors.add(block);
            }
        }

        return neighbors;
    }

    protected List<Coordinates> reconstructPath(Coordinates endCoordinates, Map<Coordinates, Coordinates> previousMap) {
        List<Coordinates> path = new ArrayList<>();
        Coordinates current = endCoordinates;

        while (current != null) {
            path.add(current);
            current = previousMap.get(current);
        }

        return path;
    }
}
