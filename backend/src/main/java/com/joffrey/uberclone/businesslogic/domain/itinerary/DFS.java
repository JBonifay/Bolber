package com.joffrey.uberclone.businesslogic.domain.itinerary;

import com.joffrey.uberclone.businesslogic.domain.map.Block;
import com.joffrey.uberclone.businesslogic.domain.map.BlockType;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.*;

public class DFS extends PathFindingAlgorithm {
    
    public DFS(NeighborFinder neighborFinder, PathReconstruct pathReconstruct) {
        super(neighborFinder, pathReconstruct);
    }

    @Override
    public List<Coordinates> findShortestPath(Block[] map, Coordinates startCoordinates, Coordinates endCoordinates) {
        Set<Coordinates> visited = new HashSet<>();
        Map<Coordinates, Coordinates> previousMap = new HashMap<>();

        boolean foundEnd = dfs(map, startCoordinates, endCoordinates, visited, previousMap);

        if (!foundEnd) {
            return Collections.singletonList(startCoordinates);
        }

        List<Coordinates> path = pathReconstruct.reconstructPath(endCoordinates, previousMap);
        Collections.reverse(path);

        return path;
    }

    private boolean dfs(Block[] map, Coordinates currentCoordinates, Coordinates endCoordinates,
                        Set<Coordinates> visited, Map<Coordinates, Coordinates> previousMap) {
        visited.add(currentCoordinates);

        if (currentCoordinates.equals(endCoordinates)) {
            return true;
        }

        List<Block> neighbors = neighborFinder.getNeighbors(map, currentCoordinates);

        for (Block neighbor : neighbors) {
            Coordinates neighborCoordinates = new Coordinates(neighbor.x(), neighbor.y());

            if (!visited.contains(neighborCoordinates) && neighbor.blockType() == BlockType.ROAD) {
                previousMap.put(neighborCoordinates, currentCoordinates);
                boolean foundEnd = dfs(map, neighborCoordinates, endCoordinates, visited, previousMap);
                if (foundEnd) {
                    return true;
                }
            }
        }

        return false;
    }

}
