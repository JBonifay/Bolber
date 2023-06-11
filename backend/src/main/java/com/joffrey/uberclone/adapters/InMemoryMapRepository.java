package com.joffrey.uberclone.adapters;

import com.joffrey.uberclone.domain.Block;
import com.joffrey.uberclone.domain.ports.MapRepository;

import java.util.ArrayList;
import java.util.List;

public class InMemoryMapRepository implements MapRepository {

    private final List<Block> blocks = new ArrayList<>();
    
    @Override
    public void insertBlock(String blockType, int xStart, int xEnd, int yStart, int yEnd, String color) {
        blocks.add(new Block(blockType, xStart, xEnd, yStart, yEnd, color));
    }

    @Override
    public List<Block> getBlocks() {
        return blocks;
    }

}
