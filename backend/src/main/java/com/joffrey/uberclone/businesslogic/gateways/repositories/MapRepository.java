package com.joffrey.uberclone.businesslogic.gateways.repositories;

import com.joffrey.uberclone.businesslogic.models.Block;

import java.util.List;

public interface MapRepository {
    void insertBlock(String blockType, int xStart, int xEnd, int yStart, int yEnd, String color);

    List<Block> getBlocks();
}
