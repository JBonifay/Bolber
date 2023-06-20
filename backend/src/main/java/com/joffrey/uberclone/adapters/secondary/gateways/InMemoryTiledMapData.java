package com.joffrey.uberclone.adapters.secondary.gateways;

import com.joffrey.uberclone.businesslogic.gateways.repositories.TiledMapData;
import com.joffrey.uberclone.businesslogic.models.Block;

import java.util.ArrayList;
import java.util.List;

public class InMemoryTiledMapData implements TiledMapData {


    private final ArrayList<Block> blocks = new ArrayList<>();

    public void insertBlock(final Block block) {
        blocks.add(block);
    }

    @Override
    public List<Block> getBlocks() {
        return blocks;
    }
}
