package com.joffrey.uberclone.adapters.secondary.gateways;

import com.joffrey.uberclone.businesslogic.gateways.repositories.TiledMapData;
import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.usecases.map.BlockType;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class CsvFileTiledMapData implements TiledMapData {

    private static final String INIT_DATA_FILE_NAME = "init.csv";

    @Override
    public List<Block> getBlocks() {
        List<List<String>> records = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new InputStreamReader(Objects.requireNonNull(this.getClass().getClassLoader().getResourceAsStream(INIT_DATA_FILE_NAME))))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                records.add(Arrays.asList(values));
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return records.stream().map(csvRow -> new Block(BlockType.valueOf(csvRow.get(0)), Integer.parseInt(csvRow.get(1)), Integer.parseInt(csvRow.get(2)), Integer.parseInt(csvRow.get(3)), Integer.parseInt(csvRow.get(4)), csvRow.get(5))).collect(Collectors.toList());
    }
}
