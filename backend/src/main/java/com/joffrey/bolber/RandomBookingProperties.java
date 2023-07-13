package com.joffrey.bolber;

import com.joffrey.bolber.business.domain.driver.Coordinates;

import java.util.Random;
import java.util.UUID;

public class RandomBookingProperties {
    private final String[] fakeNames = {
            "Clem Le Moucheux",
            "Giovanna Cuell",
            "Annamarie Knox",
            "Petronilla Levins",
            "Shelia Glenister",
            "Damian Derrett",
            "Ranee Weald",
            "Livy Lerven",
            "Kimmy Tooth",
            "Bobina Boatman",
            "Livy Lidyard",
            "Tish Aberdeen",
            "Clarabelle Merry",
            "Filberte Wickey",
            "Iorgos Brayshay",
            "Anthia Tucker",
            "Natala Mote",
            "Alysa Bleacher",
            "Efrem Jelliman",
            "Kathy Copestake"
    };
    private final Random random = new Random();

    public UUID nextUuid() {
        return UUID.randomUUID();
    }

    public String nextName() {
        return fakeNames[random.nextInt(fakeNames.length)];
    }

    public Coordinates nextDeparture() {
        return new Coordinates(new Random().nextInt(50), new Random().nextInt(50));
    }

    public Coordinates nextDestination() {
        return new Coordinates(new Random().nextInt(50), new Random().nextInt(50));
    }
}
