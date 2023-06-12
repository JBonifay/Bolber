package com.joffrey.uberclone.businesslogic.models;

import java.util.List;

public record CityMap(
        int blocksPerSide,
        List<Block> blocks) {
}
