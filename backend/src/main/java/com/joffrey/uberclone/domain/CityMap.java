package com.joffrey.uberclone.domain;

import java.util.List;

public record CityMap(
        int blocksPerSide,
        List<Block> blocks) {
}
