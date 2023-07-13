package com.joffrey.bolber;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class BolderApplication {

    public static void main(String[] args) {
        SpringApplication.run(BolderApplication.class, args);
    }
}
