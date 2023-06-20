package com.joffrey.uberclone.adapters.primary.controllers;

import com.joffrey.uberclone.businesslogic.models.TiledMap;
import com.joffrey.uberclone.businesslogic.usecases.map.MapManagementUseCase;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MapController {

    @GetMapping(value = "/api/map", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TiledMap> getMap() {
        MapManagementUseCase mapManagementUseCase = new MapManagementUseCase();
        return ResponseEntity.ok(mapManagementUseCase.getMap());
    }
}
