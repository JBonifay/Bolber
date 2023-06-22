package com.joffrey.uberclone.businesslogic.usecases.bookride;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.models.BlockType;
import com.joffrey.uberclone.businesslogic.models.CreationBlock;
import com.joffrey.uberclone.businesslogic.models.GeoMap;

public class BookRideUseCase {

    private Block[][] blocks;

    public void generateMap(final int verticalLength, final int horizontalLength) {
        blocks = new Block[verticalLength][horizontalLength];
        for (int i = 0; i < blocks.length; i++) {
            for (int j = 0; j < blocks[i].length; j++) {
                blocks[i][j] = new Block(BlockType.ROAD.name(), BlockType.ROAD.getColor());
            }
        }
    }

    public void generateBlocks(final CreationBlock... creationBlocks) {
        for (CreationBlock creationBlock : creationBlocks) {
            int startVertical = creationBlock.yStart();
            int startHorizontal = creationBlock.xStart();

            while (startVertical <= creationBlock.yEnd()) {

                while (startHorizontal != creationBlock.xEnd() + 1) {
                    blocks[startVertical][startHorizontal++] = new Block(creationBlock.blockType().name(), creationBlock.blockType().getColor());
                }

                startHorizontal = creationBlock.xStart();
                startVertical++;
            }
        }
    }

    public GeoMap map() {
        return new GeoMap(blocks);
    }

    public void generateBlocksFromCsvInput(final String[][] csvContent) {
        for (final String[] row : csvContent) {
            generateBlocks(CreationBlock.fromCsv(row));
        }
    }
}
