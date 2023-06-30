package com.joffrey.uberclone.businesslogic.domain.driver;

import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;

import java.util.UUID;

public final class NullDriver extends Driver {

    public NullDriver() {
        super(UUID.fromString("11111111-1111-1111-1111-111111111111"), "NO DRIVER", new Coordinates(-1, -1));
    }
    
}
