package com.joffrey.uberclone.unit.usecases;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.models.CreationBlock;
import com.joffrey.uberclone.businesslogic.usecases.MapGenerationUseCase;
import com.joffrey.uberclone.businesslogic.usecases.csv.CsvReader;
import com.joffrey.uberclone.businesslogic.usecases.csv.FakeCsvReader;
import com.joffrey.uberclone.businesslogic.usecases.csv.FileCsvReader;
import org.junit.jupiter.api.Test;

import static com.joffrey.uberclone.businesslogic.models.BlockType.*;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class MapGenerationUseCaseTest {
    public static final String FAKE_FILE = null;
    public static final String INIT_CSV_FILE = "test-init.csv";
    private final MapGenerationUseCase mapGenerationUseCase = new MapGenerationUseCase();
    private final Block R = new Block(ROAD.name(), ROAD.getColor());
    private final Block B = new Block(BUILDING.name(), BUILDING.getColor());
    private final Block I = new Block(RIVER.name(), RIVER.getColor());
    private final Block P = new Block(PARK.name(), PARK.getColor());

    @Test
    void shouldGenerateMapFromInput() {
        assertMapWasGenerated(new Block[][]{
                {R, R, R, R, R},
                {R, R, R, R, R},
                {R, R, R, R, R},
                {R, R, R, R, R},
                {R, R, R, R, R}
        });

        assertMapWasGenerated(new Block[][]{
                {R, R, R, R, R},
                {R, B, B, B, R},
                {R, R, R, R, R},
                {R, R, R, R, R},
                {R, R, R, R, R}
        }, new CreationBlock(BUILDING, 1, 3, 1, 1, BUILDING.getColor()));

        assertMapWasGenerated(new Block[][]{
                {R, R, R, R, R},
                {R, B, B, B, R},
                {R, B, B, B, R},
                {R, R, R, R, R},
                {R, R, R, R, R}
        }, new CreationBlock(BUILDING, 1, 3, 1, 2, BUILDING.getColor()));

        assertMapWasGenerated(new Block[][]{
                        {R, R, R, R, R},
                        {R, B, B, B, R},
                        {R, B, B, B, R},
                        {R, R, R, B, R},
                        {B, R, R, R, R}
                },
                new CreationBlock(BUILDING, 1, 3, 1, 2, BUILDING.getColor()),
                new CreationBlock(BUILDING, 3, 3, 3, 3, BUILDING.getColor()),
                new CreationBlock(BUILDING, 0, 0, 4, 4, BUILDING.getColor())
        );
    }

    @Test
    void shouldGenerateMapAndFillItFromCsvSource() {
        final FakeCsvReader fakeCsvReader = new FakeCsvReader(new String[][]{
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
        assertMapWasGenerated(new Block[][]{
                        {R, R, R, R, R, R, R, R, R, R},
                        {R, B, B, R, B, B, R, R, B, R},
                        {R, B, B, R, B, B, B, R, R, R},
                        {R, B, R, R, B, B, B, R, B, R},
                        {R, R, R, R, R, R, R, R, R, R},
                        {R, B, R, B, R, B, B, B, B, R},
                        {R, R, R, R, R, R, B, B, B, R},
                        {R, B, R, B, B, R, R, B, B, R},
                        {R, B, R, B, B, B, R, B, R, R},
                        {R, R, R, R, R, R, R, R, R, R}},
                fakeCsvReader,
                FAKE_FILE);

        assertMapWasGenerated(new Block[][]{
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
                },
                new FileCsvReader(),
                INIT_CSV_FILE);
    }

    @Test
    void mapShouldContainsDifferentBlockTypes() {
        FakeCsvReader fakeCsvReader = new FakeCsvReader(new String[][]{
                {"river", "0", "1", "0", "0", RIVER.getColor()},
                {"river", "1", "1", "0", "3", RIVER.getColor()},
                {"river", "3", "3", "3", "3", RIVER.getColor()},
                {"river", "3", "4", "2", "2", RIVER.getColor()},
                {"park", "3", "4", "0", "1", PARK.getColor()}
        });
        var csvContent = fakeCsvReader.readFile(FAKE_FILE);

        mapGenerationUseCase.generateMap(5, 5);
        mapGenerationUseCase.generateBlocksFromCsvInput(csvContent);

        assertArrayEquals(new Block[][]{
                        {I, I, R, P, P},
                        {R, I, R, P, P},
                        {R, I, R, I, I},
                        {R, I, R, I, R},
                        {R, R, R, R, R}
                }, mapGenerationUseCase.map().blocks(),
                displayMap(mapGenerationUseCase.map().blocks()));
    }

    void assertMapWasGenerated(final Block[][] expected, final CreationBlock... creationBlocks) {
        mapGenerationUseCase.generateMap(5, 5);
        mapGenerationUseCase.generateBlocks(creationBlocks);
        assertArrayEquals(expected, mapGenerationUseCase.map().blocks(), displayMap(mapGenerationUseCase.map().blocks()));
    }

    void assertMapWasGenerated(final Block[][] expected, final CsvReader csvReader, final String fileName) {
        var csvContent = csvReader.readFile(fileName);

        mapGenerationUseCase.generateMap(10, 10);
        mapGenerationUseCase.generateBlocksFromCsvInput(csvContent);

        assertArrayEquals(expected, mapGenerationUseCase.map().blocks(), displayMap(mapGenerationUseCase.map().blocks()));
    }

    String displayMap(final Block[][] map) {
        StringBuilder sb = new StringBuilder();
        sb.append("\n");

        for (final Block[] blocks : map) {
            for (final Block block : blocks) {
                sb.append(block.type()).append(" ");
            }
            sb.append("\n");
        }
        sb.append("\n");

        return sb.toString();
    }
}