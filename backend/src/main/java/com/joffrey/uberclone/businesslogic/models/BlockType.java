package com.joffrey.uberclone.businesslogic.models;

public enum BlockType {
    ROAD("+", "#f5f5f5"),
    BUILDING("B","#d77a61"),
    RIVER("*", "#3185FC"),
    PARK("P","#70A288");

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
