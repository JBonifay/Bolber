package com.joffrey.bolber;

import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.map.Block;
import com.joffrey.bolber.business.domain.map.BlockType;

import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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
    private final Block[] map;

    public RandomBookingProperties(Block[] map) {
        this.map = map;
    }

    public UUID nextUuid() {
        return UUID.randomUUID();
    }

    public String nextName() {
        return fakeNames[random.nextInt(fakeNames.length)];
    }

    public Coordinates nextDeparture() {
        List<Block> blockStream = Arrays.stream(map).filter(block -> block.blockType().equals(BlockType.ROAD)).toList();
        Block departureBlock = blockStream.get(new Random().nextInt(blockStream.size()));
        return new Coordinates(departureBlock.x(), departureBlock.y());
    }

    public Coordinates nextDestination() {
        List<Block> blockStream = Arrays.stream(map).filter(block -> block.blockType().equals(BlockType.ROAD)).toList();
        Block departureBlock = blockStream.get(new Random().nextInt(blockStream.size()));
        return new Coordinates(departureBlock.x(), departureBlock.y());
    }
}
