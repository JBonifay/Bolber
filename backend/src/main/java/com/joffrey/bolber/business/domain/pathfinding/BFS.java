package com.joffrey.bolber.business.domain.pathfinding;

import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.map.Block;
import com.joffrey.bolber.business.domain.map.BlockType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

public class BFS extends PathFindingAlgorithm {

    private final Logger logger = LoggerFactory.getLogger(getClass().getName());

    @Override
    public List<Coordinates> findShortestPath(Block[] map, Coordinates startCoordinates, Coordinates endCoordinates) {
        Queue<Coordinates> queue = new LinkedList<>();
        Set<Coordinates> visited = new HashSet<>();
        Map<Coordinates, Coordinates> previousMap = new HashMap<>();

        queue.offer(startCoordinates);
        visited.add(startCoordinates);

        boolean foundEnd = false;

        while (!queue.isEmpty()) {
            Coordinates currentCoordinates = queue.poll();

            if (currentCoordinates.equals(endCoordinates)) {
                foundEnd = true;
                break;
            }

            List<Block> neighbors = getNeighbors(map, currentCoordinates);

            for (Block neighbor : neighbors) {
                Coordinates neighborCoordinates = new Coordinates(neighbor.x(), neighbor.y());

                if (!visited.contains(neighborCoordinates) && neighbor.blockType() == BlockType.ROAD) {
                    queue.offer(neighborCoordinates);
                    visited.add(neighborCoordinates);
                    previousMap.put(neighborCoordinates, currentCoordinates);
                }
            }
        }

        if (!foundEnd) {
            return Collections.singletonList(startCoordinates);
        }

        List<Coordinates> path = reconstructPath(endCoordinates, previousMap);
        Collections.reverse(path);

        return path;
    }


}
