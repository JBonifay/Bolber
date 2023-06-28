package com.joffrey.uberclone.adapters.primary.springboot.controllers;

import com.joffrey.uberclone.businesslogic.models.Block;
import com.joffrey.uberclone.businesslogic.models.Coordinates;
import com.joffrey.uberclone.businesslogic.usecases.ItineraryUseCase;
import com.joffrey.uberclone.businesslogic.usecases.MapGenerationUseCase;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MapManagementController {

    private final MapGenerationUseCase mapGenerationUseCase;
    private final ItineraryUseCase itineraryUseCase;

    public MapManagementController(final MapGenerationUseCase mapGenerationUseCase, ItineraryUseCase itineraryUseCase) {
        this.mapGenerationUseCase = mapGenerationUseCase;
        this.itineraryUseCase = itineraryUseCase;
    }

    @GetMapping("/api/map")
    public ResponseEntity<Block[]> getMap() {
        return ResponseEntity.ok(mapGenerationUseCase.map());
    }

    @PostMapping("/api/itinerary")
    public ResponseEntity<List<Coordinates>> getItinerary(@RequestBody ItineraryRequest request) {
//        Coordinates origin = request.origin;
//        Coordinates destination = request.destination;
//        List<Coordinates> itinerary = itineraryUseCase.getItinerary(null, origin, destination);
//        return ResponseEntity.ok(itinerary);
        throw new RuntimeException();
    }

    public record ItineraryRequest(Coordinates origin, Coordinates destination) {


    }

}
