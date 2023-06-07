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
public class UberCloneApplication implements CommandLineRunner {

    @Value("classpath:init.csv")
    Resource resourceFile;
    private final MapRepository mapRepository;

    public UberCloneApplication(MapRepository mapRepository) {
        this.mapRepository = mapRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(UberCloneApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
        List<List<String>> records = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(resourceFile.getFile()))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                records.add(Arrays.asList(values));
            }
        }

        records.forEach(strings -> {
            mapRepository.insertBlock(strings.get(0),
                    Integer.parseInt(strings.get(1)),
                    Integer.parseInt(strings.get(2)),
                    Integer.parseInt(strings.get(3)),
                    Integer.parseInt(strings.get(4)),
                    strings.get(5));
        });
    }
}
