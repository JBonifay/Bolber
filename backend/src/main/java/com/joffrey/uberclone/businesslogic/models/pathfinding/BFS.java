package com.joffrey.uberclone.businesslogic.models.pathfinding;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.models.BlockType;
import com.joffrey.uberclone.businesslogic.models.Coordinates;

import java.util.*;

public class BFS extends PathFindingAlgorithm {

    public BFS(NeighborFinder neighborFinder, PathReconstruct pathReconstruct) {
        super(neighborFinder, pathReconstruct);
    }

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

            List<Block> neighbors = neighborFinder.getNeighbors(map, currentCoordinates);

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

        List<Coordinates> path = pathReconstruct.reconstructPath(endCoordinates, previousMap);
        Collections.reverse(path);

        return path;
    }


}
