package com.joffrey.uberclone.unit.usecases.bookride;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.usecases.bookride.BookRideUseCase;
import com.joffrey.uberclone.businesslogic.usecases.bookride.csv.CsvReader;
import com.joffrey.uberclone.businesslogic.usecases.bookride.csv.FakeCsvReader;
import com.joffrey.uberclone.businesslogic.usecases.map.BlockType;
import org.junit.jupiter.api.Test;

import static com.joffrey.uberclone.businesslogic.usecases.map.BlockType.BUILDING;
import static com.joffrey.uberclone.businesslogic.usecases.map.BlockType.ROAD;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class BookRideUseCaseTest {
    private final BookRideUseCase bookRideUseCase = new BookRideUseCase();
    private final BlockType R = ROAD;
    private final BlockType B = BUILDING;

    @Test
    void shouldGenerateBuildingsFromInput() {
        assertMapWasCorrectlyGenerated(new BlockType[][]{
                {R, R, R, R, R},
                {R, R, R, R, R},
                {R, R, R, R, R},
                {R, R, R, R, R},
                {R, R, R, R, R}
        });

        assertMapWasCorrectlyGenerated(new BlockType[][]{
                {R, R, R, R, R},
                {R, B, B, B, R},
                {R, R, R, R, R},
                {R, R, R, R, R},
                {R, R, R, R, R}
        }, new Block(BUILDING, 1, 3, 1, 1, BUILDING.getColor()));

        assertMapWasCorrectlyGenerated(new BlockType[][]{
                {R, R, R, R, R},
                {R, B, B, B, R},
                {R, B, B, B, R},
                {R, R, R, R, R},
                {R, R, R, R, R}
        }, new Block(BUILDING, 1, 3, 1, 2, BUILDING.getColor()));

        assertMapWasCorrectlyGenerated(new BlockType[][]{
                        {R, R, R, R, R},
                        {R, B, B, B, R},
                        {R, B, B, B, R},
                        {R, R, R, B, R},
                        {B, R, R, R, R}
                },
                new Block(BUILDING, 1, 3, 1, 2, BUILDING.getColor()),
                new Block(BUILDING, 3, 3, 3, 3, BUILDING.getColor()),
                new Block(BUILDING, 0, 0, 4, 4, BUILDING.getColor())
        );
    }

    @Test
    void shouldGenerateMapAndFillItFromCsvSource() {
        CsvReader csvReader = new FakeCsvReader();
        var csvContent = csvReader.readFile();

        bookRideUseCase.generateMap(10, 10);
        bookRideUseCase.generateBlocksFromCsvInput(csvContent);


        assertArrayEquals(new BlockType[][]{
                {R, R, R, R, R, R, R, R, R, R},
                {R, B, B, R, B, B, R, R, B, R},
                {R, B, B, R, B, B, B, R, R, R},
                {R, B, R, R, B, B, B, R, B, R},
                {R, R, R, R, R, R, R, R, R, R},
                {R, B, R, B, R, B, B, B, B, R},
                {R, R, R, R, R, R, B, B, B, R},
                {R, B, R, B, B, R, R, B, B, R},
                {R, B, R, B, B, B, R, B, R, R},
                {R, R, R, R, R, R, R, R, R, R}
        }, bookRideUseCase.map(), displayMap(bookRideUseCase.map()));
    }

    void assertMapWasCorrectlyGenerated(final BlockType[][] expected, final Block... blocks) {
        bookRideUseCase.generateMap(5, 5);
        bookRideUseCase.generateBlocks(blocks);
        assertArrayEquals(expected, bookRideUseCase.map(), displayMap(bookRideUseCase.map()));
    }

    String displayMap(final BlockType[][] map) {
        StringBuilder sb = new StringBuilder();
        sb.append("\n");

        for (final BlockType[] blockTypes : map) {
            for (final BlockType blockType : blockTypes) {
                sb.append(blockType.shortRepresentation()).append(" ");
            }
            sb.append("\n");
        }
        sb.append("\n");

        return sb.toString();
    }
}