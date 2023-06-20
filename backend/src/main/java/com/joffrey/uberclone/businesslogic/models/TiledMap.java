package com.joffrey.uberclone.businesslogic.models;

import java.util.List;

public record TiledMap(
        int gridCount,
        List<List<String>> blocks) {
}
