package com.joffrey.uberclone.infrastructure;

import com.joffrey.uberclone.domain.Block;
import com.joffrey.uberclone.domain.repositories.MapRepository;
import com.joffrey.uberclone.usecases.MapUseCase;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class MapController {

    private final MapRepository mapRepository;

    public MapController(MapRepository mapRepository) {
        this.mapRepository = mapRepository;
    }

    @GetMapping(value = "/api/map", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Block>> getMap() {
        MapUseCase mapUseCase = new MapUseCase(mapRepository);
        return ResponseEntity.ok(mapUseCase.map());
    }
}
