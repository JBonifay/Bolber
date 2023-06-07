package com.joffrey.uberclone.domain.repositories;

import com.joffrey.uberclone.domain.Block;

import java.util.List;

public interface MapRepository {
    void insertBlock(String blockType, int xStart, int xEnd, int yStart, int yEnd, String color);

    List<Block> getBlocks();
}
