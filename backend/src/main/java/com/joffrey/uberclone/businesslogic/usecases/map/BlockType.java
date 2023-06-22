package com.joffrey.uberclone.businesslogic.usecases.map;

public enum BlockType {
    ROAD("+"),
    BUILDING("B");

    private final String shortRepresentation;

    BlockType(final String shortRepresentation) {
        this.shortRepresentation = shortRepresentation;
    }

    public String shortRepresentation() {
        return shortRepresentation;
    }
}
