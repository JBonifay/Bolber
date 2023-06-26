package com.joffrey.uberclone.businesslogic.models.csv;

public class FakeCsvReader implements CsvReader {

    private String[][] blocks = new String[0][];

    public FakeCsvReader(final String[][] blocks) {
        this.blocks = blocks;
    }


    @Override
    public String[][] readFile(final String filePath) {
        return blocks;
    }
    
}
