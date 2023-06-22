package com.joffrey.uberclone.businesslogic.usecases;


import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class PathFindingUseCase {
    public int[][] shortestPath(final int[][] map, final int[] from, final int[] destination) {
        int m = map.length;
        int n = map[0].length;

        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}}; // Up, Down, Left, Right

        boolean[][] visited = new boolean[m][n];
        visited[from[0]][from[1]] = true;

        Queue<int[]> queue = new LinkedList<>();
        queue.offer(from);

        int[][] parent = new int[m][n];
        parent[from[0]][from[1]] = -1;

        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int row = current[0];
            int col = current[1];

            if (row == destination[0] && col == destination[1]) {
                // Destination reached, construct and return the path
                return constructPath(parent, destination);
            }

            for (int[] direction : directions) {
                int newRow = row + direction[0];
                int newCol = col + direction[1];

                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && map[newRow][newCol] == 1 && !visited[newRow][newCol]) {
                    visited[newRow][newCol] = true;
                    queue.offer(new int[]{newRow, newCol});
                    parent[newRow][newCol] = row * n + col;
                }
            }
        }

        // No path found
        return new int[0][0];
    }

    private int[][] constructPath(int[][] parent, int[] destination) {
        List<int[]> pathList = new ArrayList<>();
        int row = destination[0];
        int col = destination[1];

        while (row != -1 && col != -1) {
            pathList.add(new int[]{row, col});
            int p = parent[row][col];
            row = p / parent[0].length;
            col = p % parent[0].length;
        }

        int[][] path = new int[pathList.size()][2];
        for (int i = 0; i < pathList.size(); i++) {
            path[i] = pathList.get(pathList.size() - 1 - i);
        }

        return path;
    }
}