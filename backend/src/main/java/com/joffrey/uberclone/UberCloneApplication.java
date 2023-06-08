package com.joffrey.uberclone;

import com.joffrey.uberclone.domain.repositories.MapRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class UberCloneApplication {

    public static void main(String[] args) {
        SpringApplication.run(UberCloneApplication.class, args);
    }
    
}
