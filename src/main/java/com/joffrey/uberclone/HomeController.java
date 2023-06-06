package com.joffrey.uberclone;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    
    @GetMapping("/drivers")
    public ResponseEntity<String> drivers() {
        return ResponseEntity.ok("Alfred");
    }
}
