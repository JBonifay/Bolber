package com.joffrey.uberclone.adapters;

import com.joffrey.uberclone.domain.ports.MapProperties;
import org.springframework.beans.factory.annotation.Value;

public class InMemoryMapProperties implements MapProperties {

    @Value("${map.properties.side-size:50}")
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
