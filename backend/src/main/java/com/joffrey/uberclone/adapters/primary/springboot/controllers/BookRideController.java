package com.joffrey.uberclone.adapters.primary.springboot.controllers;

import com.joffrey.uberclone.businesslogic.models.GeoMap;
import com.joffrey.uberclone.businesslogic.usecases.MapGenerationUseCase;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookRideController {

    private final MapGenerationUseCase mapGenerationUseCase;

    public BookRideController(final MapGenerationUseCase mapGenerationUseCase) {
        this.mapGenerationUseCase = mapGenerationUseCase;
    }

    @GetMapping("/api/map")
    public ResponseEntity<GeoMap> getMap() {
        return ResponseEntity.ok(mapGenerationUseCase.map());
    }
    
}
