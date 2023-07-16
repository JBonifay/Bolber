package com.joffrey.bolber.adapters.primary;

import com.joffrey.bolber.business.MapManagement;
import com.joffrey.bolber.business.domain.map.Block;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MapController {

    private final MapManagement mapManagement;

    public MapController(MapManagement mapManagement) {
        this.mapManagement = mapManagement;
    }

    @GetMapping("/api/map_data")
    public ResponseEntity<Block[]> getMap() {
        return ResponseEntity.ok(mapManagement.map());
    }
    
}
