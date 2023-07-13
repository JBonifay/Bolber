package com.joffrey.bolber.business.domain.csv;

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
