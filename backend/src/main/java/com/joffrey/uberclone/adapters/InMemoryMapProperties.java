package com.joffrey.uberclone.adapters;

import com.joffrey.uberclone.domain.ports.MapProperties;

public class InMemoryMapProperties implements MapProperties {

    private int sideSize;

    @Override
    public void setSideSize(int sideSize) {
        this.sideSize = sideSize;
    }

    @Override
    public int getSideSize() {
        return sideSize;
    }
}
