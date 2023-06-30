package com.joffrey.uberclone.businesslogic.domain.map;

public record CreationBlock(BlockType blockType, int xStart, int xEnd, int yStart, int yEnd, String color) {

    public CreationBlock(BlockType blockType, int xStart, int xEnd, int yStart, int yEnd) {
        this(blockType, xStart, xEnd, yStart, yEnd, blockType.getColor());
    }
    public static CreationBlock fromCsv(final String[] row) {
        return new CreationBlock(
                BlockType.valueOf(row[0].toUpperCase()),
                Integer.parseInt(row[1]),
                Integer.parseInt(row[2]),
                Integer.parseInt(row[3]),
                Integer.parseInt(row[4]),
                row[5]);
    }
}
