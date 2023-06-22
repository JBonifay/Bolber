package com.joffrey.uberclone.businesslogic.usecases.map;

public enum BlockType {
    ROAD("+", "#000000"),
    BUILDING("B","#d77a61");

    private final String shortRepresentation;
    private final String color;

    BlockType(final String shortRepresentation, final String color) {
        this.shortRepresentation = shortRepresentation;
        this.color = color;
    }

    public String shortRepresentation() {
        return shortRepresentation;
    }

    public String getColor() {
        return color;
    }
    
}
