package com.joffrey.bolber.business.domain.map;

public enum BlockType {
    ROAD("#f5f5f5"),
    BUILDING("#d77a61"),
    RIVER("#3185FC"),
    PARK("#70A288");

    private final String color;

    BlockType(final String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

}
