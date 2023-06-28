package com.joffrey.uberclone.businesslogic.usecases;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.models.CreationBlock;

import static com.joffrey.uberclone.businesslogic.models.BlockType.ROAD;

public class MapGenerationUseCase {
    private Block[] map;
    private int horizontalLength;

    public void generateMap(final int verticalLength, final int horizontalLength) {
        this.horizontalLength = horizontalLength;
        map = new Block[verticalLength * horizontalLength];

        int index = 0;
        for (int v = 0; v < verticalLength; v++) {
            for (int h = 0; h < horizontalLength; h++) {
                map[index++] = new Block(ROAD, ROAD.getColor(), h, v);
            }
        }
    }

    public void generateBlocks(final CreationBlock... creationBlocks) {

        for (CreationBlock cb : creationBlocks) {
            int startX = cb.xStart();
            int endX = cb.xEnd();
            int startY = cb.yStart();

            for (; startY <= cb.yEnd(); startY++) {
                int offset = startY * horizontalLength;
                for (; startX <= endX; startX++) {
                    map[startX + offset] = new Block(cb.blockType(), cb.blockType().getColor(), startX, startY);
                }
                startX = cb.xStart();
            }
        }
    }

    public Block[] map() {
        return map;
    }

    public void generateBlocksFromCsvInput(final String[][] csvContent) {
        for (final String[] row : csvContent) {
            generateBlocks(CreationBlock.fromCsv(row));
        }
    }
}
