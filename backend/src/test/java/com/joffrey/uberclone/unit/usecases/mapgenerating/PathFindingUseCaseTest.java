package com.joffrey.uberclone.unit.usecases.mapgenerating;

import com.joffrey.uberclone.businesslogic.usecases.PathFindingUseCase;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

public class PathFindingUseCaseTest {

    private final PathFindingUseCase pathFindingUseCase = new PathFindingUseCase();

    @Test
    public void testShortestPath_DirectPath() {
        int[][] map = {
                {1, 1, 1},
                {1, 0, 1},
                {1, 1, 1}
        };
        int[] from = {0, 0};
        int[] destination = {2, 2};
        int[][] expectedPath = {
                {0, 0},
                {1, 0},
                {2, 0},
                {2, 1},
                {2, 2}
        };

        int[][] actualPath = pathFindingUseCase.shortestPath(map, from, destination);
        assertArrayEquals(expectedPath, actualPath);
    }

    @Test
    public void testShortestPath_NoPossiblePath() {
        int[][] map = {
                {1, 0, 1},
                {0, 0, 0},
                {1, 0, 1}
        };
        int[] from = {0, 0};
        int[] destination = {2, 2};
        int[][] expectedPath = {}; // Empty path

        int[][] actualPath = pathFindingUseCase.shortestPath(map, from, destination);
        assertArrayEquals(expectedPath, actualPath);
    }

    @Test
    public void testShortestPath_MultiplePaths() {
        int[][] map = {
                {1, 1, 1, 1},
                {1, 0, 0, 1},
                {1, 0, 0, 1},
                {1, 1, 1, 1}
        };
        int[] from = {0, 0};
        int[] destination = {3, 3};
        int[][] expectedPath = {
                {0, 0},
                {1, 0},
                {2, 0},
                {2, 1},
                {2, 2},
                {2, 3},
                {3, 3}
        };

        int[][] actualPath = pathFindingUseCase.shortestPath(map, from, destination);
        System.out.println(Arrays.deepToString(actualPath));
        assertArrayEquals(expectedPath, actualPath);
    }

    @Test
    public void testShortestPath_StartingPositionIsDestination() {
        int[][] map = {
                {1, 0, 1},
                {0, 0, 1},
                {1, 1, 1}
        };
        int[] from = {1, 2};
        int[] destination = {1, 2};
        int[][] expectedPath = {{1, 2}}; // Single point path

        int[][] actualPath = pathFindingUseCase.shortestPath(map, from, destination);
        assertArrayEquals(expectedPath, actualPath);
    }

    @Test
    public void testShortestPath_UnreachableDestination() {
        int[][] map = {
                {1, 1, 1},
                {1, 0, 1},
                {1, 1, 1}
        };
        int[] from = {0, 0};
        int[] destination = {2, 2};
        int[][] expectedPath = {}; // Empty path

        int[][] actualPath = pathFindingUseCase.shortestPath(map, from, destination);
        assertArrayEquals(expectedPath, actualPath);
    }
}
