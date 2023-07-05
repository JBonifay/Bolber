package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.domain.map.SimulationMap;
import com.joffrey.uberclone.businesslogic.usecases.MapGenerationUseCase;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MapController {

    private final MapGenerationUseCase mapGenerationUseCase;

    public MapController(MapGenerationUseCase mapGenerationUseCase) {
        this.mapGenerationUseCase = mapGenerationUseCase;
    }

    @GetMapping("/api/map")
    public ResponseEntity<SimulationMap> getMap() {
        return ResponseEntity.ok(new SimulationMap(mapGenerationUseCase.map()));
    }

}
