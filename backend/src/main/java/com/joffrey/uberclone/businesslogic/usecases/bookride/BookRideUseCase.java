package com.joffrey.uberclone.businesslogic.usecases.bookride;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.models.BlockType;

import java.util.Arrays;

import static com.joffrey.uberclone.businesslogic.models.BlockType.ROAD;

public class BookRideUseCase {

    private BlockType[][] map;

    public void generateMap(final int verticalLength, final int horizontalLength) {
        map = new BlockType[verticalLength][horizontalLength];
        for (final BlockType[] blockTypes : map) {
            Arrays.fill(blockTypes, ROAD);
        }
    }

    public void generateBlocks(final Block... blocks) {
        for (Block block : blocks) {
            int startVertical = block.yStart();
            int startHorizontal = block.xStart();

            while (startVertical <= block.yEnd()) {

                while (startHorizontal != block.xEnd() + 1) {
                    map[startVertical][startHorizontal++] = block.blockType();
                }

                startHorizontal = block.xStart();
                startVertical++;
            }
        }
    }

    public BlockType[][] map() {
        return map;
    }

    public void generateBlocksFromCsvInput(final String[][] csvContent) {
        for (final String[] row : csvContent) {
            generateBlocks(
                    new Block(
                            BlockType.valueOf(row[0].toUpperCase()),
                            Integer.parseInt(row[1]),
                            Integer.parseInt(row[2]),
                            Integer.parseInt(row[3]),
                            Integer.parseInt(row[4]),
                            row[5]));
        }
    }
}
