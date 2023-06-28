package com.joffrey.uberclone.businesslogic.models.pathfinding;

import com.joffrey.uberclone.businesslogic.models.Coordinates;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class PathReconstruct {

    public List<Coordinates> reconstructPath(Coordinates endCoordinates, Map<Coordinates, Coordinates> previousMap) {
        List<Coordinates> path = new ArrayList<>();
        Coordinates current = endCoordinates;

        while (current != null) {
            path.add(current);
            current = previousMap.get(current);
        }

        return path;
    }
}
