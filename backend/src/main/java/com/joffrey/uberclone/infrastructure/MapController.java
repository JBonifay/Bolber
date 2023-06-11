package com.joffrey.uberclone.infrastructure;

import com.joffrey.uberclone.domain.CityMap;
import com.joffrey.uberclone.domain.ports.MapProperties;
import com.joffrey.uberclone.domain.ports.MapRepository;
import com.joffrey.uberclone.usecases.MapUseCase;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MapController {

    private final MapProperties mapProperties;
    private final MapRepository mapRepository;

    public MapController(MapProperties mapProperties, MapRepository mapRepository) {
        this.mapProperties = mapProperties;
        this.mapRepository = mapRepository;
    }

    @GetMapping(value = "/api/map", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CityMap> getMap() {
        MapUseCase mapUseCase = new MapUseCase(mapProperties, mapRepository);
        return ResponseEntity.ok(mapUseCase.map());
    }
}
