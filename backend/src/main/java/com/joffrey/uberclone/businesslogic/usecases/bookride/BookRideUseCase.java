package com.joffrey.uberclone.businesslogic.usecases.bookride;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.usecases.map.BlockType;

import java.util.Arrays;

import static com.joffrey.uberclone.businesslogic.usecases.map.BlockType.BUILDING;
import static com.joffrey.uberclone.businesslogic.usecases.map.BlockType.ROAD;

public class BookRideUseCase {

    private BlockType[][] map;

    public void generateMap(final int verticalLength, final int horizontalLength) {
        map = new BlockType[verticalLength][horizontalLength];
        for (final BlockType[] blockTypes : map) {
            Arrays.fill(blockTypes, ROAD);
        }
    }

    public void generateBlocks(final Block block) {
        int startVertical = block.yStart();
        int startHorizontal = block.xStart();

        while (startVertical <= block.yEnd()) {

            while (startHorizontal != block.xEnd() + 1) {
                map[startVertical][startHorizontal++] = BUILDING;
            }
            
            startHorizontal = block.xStart();
            startVertical++;
        }
    }

    public BlockType[][] map() {
        return map;
    }
}
