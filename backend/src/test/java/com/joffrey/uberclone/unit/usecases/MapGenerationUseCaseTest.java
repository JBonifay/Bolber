package com.joffrey.uberclone.unit.usecases;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.models.CreationBlock;
import com.joffrey.uberclone.businesslogic.models.csv.CsvReader;
import com.joffrey.uberclone.businesslogic.models.csv.FakeCsvReader;
import com.joffrey.uberclone.businesslogic.models.csv.FileCsvReader;
import com.joffrey.uberclone.businesslogic.usecases.MapGenerationUseCase;
import org.junit.jupiter.api.Test;

import static com.joffrey.uberclone.businesslogic.models.BlockType.*;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class MapGenerationUseCaseTest {
    public static final String FAKE_FILE = null;
    public static final String INIT_CSV_FILE = "test-init.csv";
    private final MapGenerationUseCase mapGenerationUseCase = new MapGenerationUseCase();

    private Block R(int x, int y) {
        return new Block(ROAD, ROAD.getColor(), x, y);
    }

    private Block B(int x, int y) {
        return new Block(BUILDING, BUILDING.getColor(), x, y);
    }

    private Block I(int x, int y) {
        return new Block(RIVER, RIVER.getColor(), x, y);
    }

    private Block P(int x, int y) {
        return new Block(PARK, PARK.getColor(), x, y);
    }

    @Test
    void shouldGenerateMap() {
        assertMapWasGenerated(1, 1,
                new Block[]{
                        R(0, 0)
                });

        assertMapWasGenerated(1, 2,
                new Block[]{
                        R(0, 0), R(1, 0)
                });

        assertMapWasGenerated(2, 1,
                new Block[]{
                        R(0, 0),
                        R(0, 1)
                });

        assertMapWasGenerated(3, 3,
                new Block[]{
                        R(0, 0), R(1, 0), R(2, 0),
                        R(0, 1), R(1, 1), R(2, 1),
                        R(0, 2), R(1, 2), R(2, 2),
                });

        assertMapWasGenerated(3, 3,
                new Block[]{
                        R(0, 0), B(1, 0), R(2, 0),
                        R(0, 1), R(1, 1), R(2, 1),
                        R(0, 2), R(1, 2), R(2, 2),
                }, new CreationBlock(BUILDING, 1, 1, 0, 0));

        assertMapWasGenerated(3, 3,
                new Block[]{
                        R(0, 0), R(1, 0), R(2, 0),
                        R(0, 1), B(1, 1), R(2, 1),
                        R(0, 2), R(1, 2), R(2, 2),
                }, new CreationBlock(BUILDING, 1, 1, 1, 1));


        assertMapWasGenerated(3, 3,
                new Block[]{
                        R(0, 0), R(1, 0), R(2, 0),
                        B(0, 1), B(1, 1), R(2, 1),
                        R(0, 2), R(1, 2), R(2, 2),
                }, new CreationBlock(BUILDING, 0, 1, 1, 1));


        assertMapWasGenerated(3, 3,
                new Block[]{
                        B(0, 0), R(1, 0), R(2, 0),
                        B(0, 1), R(1, 1), R(2, 1),
                        R(0, 2), R(1, 2), R(2, 2),
                }, new CreationBlock(BUILDING, 0, 0, 0, 1));

        assertMapWasGenerated(5, 5,
                new Block[]{
                        R(0, 0), R(1, 0), R(2, 0), R(3, 0), R(4, 0),
                        R(0, 1), B(1, 1), B(2, 1), R(3, 1), B(4, 1),
                        R(0, 2), B(1, 2), B(2, 2), R(3, 2), R(4, 2),
                        R(0, 3), B(1, 3), R(2, 3), R(3, 3), B(4, 3),
                        R(0, 4), R(1, 4), R(2, 4), R(3, 4), R(4, 4),
                },
                new CreationBlock(BUILDING, 1, 2, 1, 2),
                new CreationBlock(BUILDING, 4, 4, 1, 1),
                new CreationBlock(BUILDING, 1, 1, 3, 3),
                new CreationBlock(BUILDING, 4, 4, 3, 3)
        );

    }

    @Test
    void shouldGenerateMapAndFillItFromCsvSource() {
        final FakeCsvReader csvReader = new FakeCsvReader(new String[][]{
                {"building", "1", "2", "1", "2", BUILDING.getColor()},
                {"building", "1", "1", "3", "3", BUILDING.getColor()},
                {"building", "4", "5", "1", "3", BUILDING.getColor()},
                {"building", "6", "6", "2", "3", BUILDING.getColor()},
                {"building", "8", "8", "1", "1", BUILDING.getColor()},
                {"building", "8", "8", "3", "3", BUILDING.getColor()},
                {"building", "1", "1", "5", "5", BUILDING.getColor()},
                {"building", "3", "3", "5", "5", BUILDING.getColor()},
                {"building", "5", "5", "5", "5", BUILDING.getColor()},
                {"building", "6", "8", "5", "6", BUILDING.getColor()},
                {"building", "7", "8", "7", "7", BUILDING.getColor()},
                {"building", "7", "7", "8", "8", BUILDING.getColor()},
                {"building", "1", "1", "7", "8", BUILDING.getColor()},
                {"building", "3", "4", "7", "8", BUILDING.getColor()},
                {"building", "5", "5", "8", "8", BUILDING.getColor()}
        });
        assertMapWasGenerated(10, 10, csvReader, FAKE_FILE, new Block[]{
                R(0, 0), R(1, 0), R(2, 0), R(3, 0), R(4, 0), R(5, 0), R(6, 0), R(7, 0), R(8, 0), R(9, 0),
                R(0, 1), B(1, 1), B(2, 1), R(3, 1), B(4, 1), B(5, 1), R(6, 1), R(7, 1), B(8, 1), R(9, 1),
                R(0, 2), B(1, 2), B(2, 2), R(3, 2), B(4, 2), B(5, 2), B(6, 2), R(7, 2), R(8, 2), R(9, 2),
                R(0, 3), B(1, 3), R(2, 3), R(3, 3), B(4, 3), B(5, 3), B(6, 3), R(7, 3), B(8, 3), R(9, 3),
                R(0, 4), R(1, 4), R(2, 4), R(3, 4), R(4, 4), R(5, 4), R(6, 4), R(7, 4), R(8, 4), R(9, 4),
                R(0, 5), B(1, 5), R(2, 5), B(3, 5), R(4, 5), B(5, 5), B(6, 5), B(7, 5), B(8, 5), R(9, 5),
                R(0, 6), R(1, 6), R(2, 6), R(3, 6), R(4, 6), R(5, 6), B(6, 6), B(7, 6), B(8, 6), R(9, 6),
                R(0, 7), B(1, 7), R(2, 7), B(3, 7), B(4, 7), R(5, 7), R(6, 7), B(7, 7), B(8, 7), R(9, 7),
                R(0, 8), B(1, 8), R(2, 8), B(3, 8), B(4, 8), B(5, 8), R(6, 8), B(7, 8), R(8, 8), R(9, 8),
                R(0, 9), R(1, 9), R(2, 9), R(3, 9), R(4, 9), R(5, 9), R(6, 9), R(7, 9), R(8, 9), R(9, 9),
        });

        assertMapWasGenerated(10, 10, new FileCsvReader(), INIT_CSV_FILE, new Block[]{
                R(0, 0), R(1, 0), R(2, 0), R(3, 0), R(4, 0), R(5, 0), R(6, 0), R(7, 0), R(8, 0), R(9, 0),
                R(0, 1), B(1, 1), B(2, 1), R(3, 1), B(4, 1), B(5, 1), R(6, 1), R(7, 1), B(8, 1), R(9, 1),
                R(0, 2), B(1, 2), B(2, 2), R(3, 2), B(4, 2), B(5, 2), B(6, 2), R(7, 2), R(8, 2), R(9, 2),
                R(0, 3), B(1, 3), R(2, 3), R(3, 3), B(4, 3), B(5, 3), B(6, 3), R(7, 3), B(8, 3), R(9, 3),
                R(0, 4), R(1, 4), R(2, 4), R(3, 4), R(4, 4), R(5, 4), R(6, 4), R(7, 4), R(8, 4), R(9, 4),
                R(0, 5), B(1, 5), R(2, 5), B(3, 5), R(4, 5), B(5, 5), B(6, 5), B(7, 5), B(8, 5), R(9, 5),
                R(0, 6), R(1, 6), R(2, 6), R(3, 6), R(4, 6), R(5, 6), B(6, 6), B(7, 6), B(8, 6), R(9, 6),
                R(0, 7), B(1, 7), R(2, 7), B(3, 7), B(4, 7), R(5, 7), R(6, 7), B(7, 7), B(8, 7), R(9, 7),
                R(0, 8), B(1, 8), R(2, 8), B(3, 8), B(4, 8), B(5, 8), R(6, 8), B(7, 8), R(8, 8), R(9, 8),
                R(0, 9), R(1, 9), R(2, 9), R(3, 9), R(4, 9), R(5, 9), R(6, 9), R(7, 9), R(8, 9), R(9, 9),
        });
    }

    @Test
    void mapShouldContainsDifferentBlockTypes() {
        final FakeCsvReader csvReader = new FakeCsvReader(new String[][]{
                {"river", "0", "1", "0", "0", RIVER.getColor()},
                {"river", "1", "1", "0", "3", RIVER.getColor()},
                {"river", "3", "3", "3", "3", RIVER.getColor()},
                {"river", "3", "4", "2", "2", RIVER.getColor()},
                {"park", "3", "4", "0", "1", PARK.getColor()}
        });
        assertMapWasGenerated(5, 5, csvReader, FAKE_FILE, new Block[]{
                I(0, 0), I(1, 0), R(2, 0), P(3, 0), P(4, 0),
                R(0, 1), I(1, 1), R(2, 1), P(3, 1), P(4, 1),
                R(0, 2), I(1, 2), R(2, 2), I(3, 2), I(4, 2),
                R(0, 3), I(1, 3), R(2, 3), I(3, 3), R(4, 3),
                R(0, 4), R(1, 4), R(2, 4), R(3, 4), R(4, 4)
        });
    }

    void assertMapWasGenerated(int verticalLength, int horizontalLength, Block[] expected, CreationBlock... creationBlocks) {
        mapGenerationUseCase.generateMap(verticalLength, horizontalLength);
        mapGenerationUseCase.generateBlocks(creationBlocks);
        assertArrayEquals(expected, mapGenerationUseCase.map(), displayMap(mapGenerationUseCase.map(), horizontalLength));
    }

    void assertMapWasGenerated(int verticalLength, int horizontalLength, final CsvReader csvReader, final String fileName, Block[] expected) {
        var csvContent = csvReader.readFile(fileName);
        mapGenerationUseCase.generateMap(verticalLength, horizontalLength);
        mapGenerationUseCase.generateBlocksFromCsvInput(csvContent);
        assertArrayEquals(expected, mapGenerationUseCase.map(), displayMap(mapGenerationUseCase.map(), horizontalLength));
    }


    String displayMap(final Block[] map, int horizontalLength) {
        StringBuilder sb = new StringBuilder();
        sb.append("\n");

        int hor = 0;
        for (final Block block : map) {
            if (hor == horizontalLength) {
                sb.append("\n");
                hor = 0;
            }
            sb.append(block.blockType()).append(" ");
            hor++;
        }
        sb.append("\n");
        return sb.toString();
    }
}