package com.joffrey.uberclone.adapters.secondary.gateways.repositories;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.gateways.repositories.MapRepository;

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
