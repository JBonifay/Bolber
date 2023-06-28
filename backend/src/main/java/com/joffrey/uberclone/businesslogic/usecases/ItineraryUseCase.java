package com.joffrey.uberclone.businesslogic.usecases;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.models.BlockType;
import com.joffrey.uberclone.businesslogic.models.Coordinates;

import java.util.*;

public class ItineraryUseCase {

    public List<Coordinates> getItinerary(Block[] map, Coordinates startCoordinates, Coordinates endCoordinates) {
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

    private List<Block> getNeighbors(Block[] map, Coordinates coordinates) {
        List<Block> neighbors = new ArrayList<>();

        for (Block block : map) {
            if ((Math.abs(block.x() - coordinates.horizontal()) == 1 && block.y() == coordinates.vertical())
                || (Math.abs(block.y() - coordinates.vertical()) == 1 && block.x() == coordinates.horizontal())) {
                neighbors.add(block);
            }
        }

        return neighbors;
    }

    private List<Coordinates> reconstructPath(Coordinates endCoordinates, Map<Coordinates, Coordinates> previousMap) {
        List<Coordinates> path = new ArrayList<>();
        Coordinates current = endCoordinates;

        while (current != null) {
            path.add(current);
            current = previousMap.get(current);
        }

        return path;
    }
}
