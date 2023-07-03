package com.joffrey.uberclone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class UberCloneApplication {

    public static void main(String[] args) {
        SpringApplication.run(UberCloneApplication.class, args);
    }
    
}
