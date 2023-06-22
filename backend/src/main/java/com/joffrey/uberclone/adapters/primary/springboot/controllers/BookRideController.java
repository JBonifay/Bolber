package com.joffrey.uberclone.adapters.primary.springboot.controllers;

import com.joffrey.uberclone.businesslogic.models.GeoMap;
import com.joffrey.uberclone.businesslogic.usecases.bookride.BookRideUseCase;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookRideController {

    private final BookRideUseCase bookRideUseCase;

    public BookRideController(final BookRideUseCase bookRideUseCase) {
        this.bookRideUseCase = bookRideUseCase;
    }

    @GetMapping("/api/map")
    public ResponseEntity<GeoMap> getMap() {
        return ResponseEntity.ok(bookRideUseCase.map());
    }
    
}
