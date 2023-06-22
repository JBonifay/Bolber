package com.joffrey.uberclone.businesslogic.models;

import com.joffrey.uberclone.businesslogic.usecases.map.BlockType;

public record Block(BlockType blockType, int xStart, int xEnd, int yStart, int yEnd, String color) {
    
}
