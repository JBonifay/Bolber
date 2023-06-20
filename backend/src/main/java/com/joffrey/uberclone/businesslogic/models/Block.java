package com.joffrey.uberclone.businesslogic.models;

import java.util.List;
import java.util.stream.Collectors;

public record Block(String blockType, int xStart, int xEnd, int yStart, int yEnd, String color) {


    public static List<Block> fromCsvContent(final List<List<String>> csvFileContent) {
        return csvFileContent.stream().map(Block::fromCsvRow).collect(Collectors.toList());
    }

    public static Block fromCsvRow(final List<String> csvRow) {
        return new Block(
                csvRow.get(0),
                Integer.parseInt(csvRow.get(1)),
                Integer.parseInt(csvRow.get(2)),
                Integer.parseInt(csvRow.get(3)),
                Integer.parseInt(csvRow.get(4)),
                csvRow.get(5));
    }
}
