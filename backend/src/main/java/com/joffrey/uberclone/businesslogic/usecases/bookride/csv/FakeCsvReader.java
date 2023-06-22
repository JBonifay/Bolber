package com.joffrey.uberclone.businesslogic.usecases.bookride.csv;

public class FakeCsvReader implements CsvReader {

    private final String[][] blocks = new String[][]{
            {"building", "1", "2", "1", "2", "#d77a61"},
            {"building", "1", "1", "3", "3", "#d77a61"},
            {"building", "4", "5", "1", "3", "#d77a61"},
            {"building", "6", "6", "2", "3", "#d77a61"},
            {"building", "8", "8", "1", "1", "#d77a61"},
            {"building", "8", "8", "3", "3", "#d77a61"},
            {"building", "1", "1", "5", "5", "#d77a61"},
            {"building", "3", "3", "5", "5", "#d77a61"},
            {"building", "5", "5", "5", "5", "#d77a61"},
            {"building", "6", "8", "5", "6", "#d77a61"},
            {"building", "7", "8", "7", "7", "#d77a61"},
            {"building", "7", "7", "8", "8", "#d77a61"},
            {"building", "1", "1", "7", "8", "#d77a61"},
            {"building", "3", "4", "7", "8", "#d77a61"},
            {"building", "5", "5", "8", "8", "#d77a61"}
    };

    @Override
    public String[][] readFile() {
        return blocks;
    }

}
