package com.joffrey.uberclone.unit.usecases.bookride;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.usecases.bookride.BookRideUseCase;
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
        }, new Block(BUILDING, 1, 3, 1, 1, "#d77a61"));

        assertMapWasCorrectlyGenerated(new BlockType[][]{
                {R, R, R, R, R},
                {R, B, B, B, R},
                {R, B, B, B, R},
                {R, R, R, R, R},
                {R, R, R, R, R}
        }, new Block(BUILDING, 1, 3, 1, 2, "#d77a61"));

        assertMapWasCorrectlyGenerated(new BlockType[][]{
                        {R, R, R, R, R},
                        {R, B, B, B, R},
                        {R, B, B, B, R},
                        {R, R, R, B, R},
                        {B, R, R, R, R}
                },
                new Block(BUILDING, 1, 3, 1, 2, "#d77a61"),
                new Block(BUILDING, 3, 3, 3, 3, "#d77a61"),
                new Block(BUILDING, 0, 0, 4, 4, "#d77a61")
        );
    }

    void assertMapWasCorrectlyGenerated(final BlockType[][] expected, final Block... blocks) {
        bookRideUseCase.generateMap(5, 5);
        for (Block block : blocks) {
            bookRideUseCase.generateBlocks(block);
        }
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