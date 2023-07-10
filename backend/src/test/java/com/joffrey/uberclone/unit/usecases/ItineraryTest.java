package com.joffrey.uberclone.unit.usecases;

import com.joffrey.uberclone.businesslogic.domain.driver.Driver;
import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.domain.map.Block;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import org.junit.jupiter.api.Test;

import java.util.List;

import static com.joffrey.uberclone.businesslogic.domain.notification.EventType.ARRIVED_TO_CUSTOMER;
import static com.joffrey.uberclone.fixtures.BlockFixtures.I;
import static com.joffrey.uberclone.fixtures.BlockFixtures.R;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ItineraryTest extends BookingManagementTest {

    @Test
    void should_find_shortest_itinerary() {
        assertItineraryIsTheShortest(new Block[]{
                        I(0, 0), I(0, 0), I(0, 0), I(0, 0),
                        I(0, 0), I(0, 0), I(0, 0), I(0, 0),
                        I(0, 0), I(0, 0), I(0, 0), I(0, 0),
                        I(0, 0), I(0, 0), I(0, 0), I(0, 0),
                },
                new Coordinates(0, 0),
                new Coordinates(3, 0),
                new Itinerary(List.of(new Coordinates(0, 0))));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0), R(1, 0)
                },
                new Coordinates(0, 0),
                new Coordinates(1, 0),
                new Itinerary(List.of(new Coordinates(0, 0), new Coordinates(1, 0))));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0), R(1, 0), R(2, 0), R(3, 0)
                },
                new Coordinates(0, 0),
                new Coordinates(3, 0),
                new Itinerary(List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0),
                        new Coordinates(2, 0),
                        new Coordinates(3, 0)
                )));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0),
                        R(0, 1)
                },
                new Coordinates(0, 0),
                new Coordinates(0, 1),
                new Itinerary(List.of(
                        new Coordinates(0, 0),
                        new Coordinates(0, 1)
                )));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0),
                        R(0, 1),
                        R(0, 2),
                        R(0, 3)
                },
                new Coordinates(0, 0),
                new Coordinates(0, 3),
                new Itinerary(List.of(
                        new Coordinates(0, 0),
                        new Coordinates(0, 1),
                        new Coordinates(0, 2),
                        new Coordinates(0, 3)
                )));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0), R(1, 0), R(2, 0),
                        R(0, 1), R(1, 1), R(2, 1),

                },
                new Coordinates(0, 0),
                new Coordinates(2, 1),
                new Itinerary(List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0),
                        new Coordinates(2, 0),
                        new Coordinates(2, 1)
                )));

        assertItineraryIsTheShortest(new Block[]{
                        R(0, 0), I(1, 0), R(2, 0), R(3, 0), R(4, 0),
                        R(0, 1), R(1, 1), R(2, 1), I(3, 1), R(4, 1),
                        R(0, 2), R(1, 2), R(2, 2), I(3, 2), R(4, 2),
                        I(0, 3), I(1, 3), I(2, 3), I(3, 3), R(4, 3),
                        R(0, 4), R(1, 4), R(2, 4), R(3, 4), R(4, 4),

                },
                new Coordinates(0, 0),
                new Coordinates(4, 4),
                new Itinerary(List.of(
                        new Coordinates(0, 0),
                        new Coordinates(0, 1),
                        new Coordinates(1, 1),
                        new Coordinates(2, 1),
                        new Coordinates(2, 0),
                        new Coordinates(3, 0),
                        new Coordinates(4, 0),
                        new Coordinates(4, 1),
                        new Coordinates(4, 2),
                        new Coordinates(4, 3),
                        new Coordinates(4, 4)
                )));
    }

    @Test
    void should_provide_shortest_itinerary_from_driver_to_customer() {
        itineraryFinder.setItinerary(new Itinerary(List.of(
                new Coordinates(2, 2),
                new Coordinates(2, 1),
                new Coordinates(2, 0),
                new Coordinates(1, 0),
                new Coordinates(0, 0)
        )));
        Driver closestDriver = aDriverIsPresent("Albert", new Coordinates(2, 2));
        aBookingIsReceived();

        assertEquals(
                new Itinerary(List.of(
                        new Coordinates(2, 2),
                        new Coordinates(2, 1),
                        new Coordinates(2, 0),
                        new Coordinates(1, 0),
                        new Coordinates(0, 0)
                )),
                closestDriver.actualItinerary()
        );
    }

    @Test
    void should_provide_shortest_itinerary_from_customer_pickup_location_to_destination() {
        Driver closestDriver = aDriverIsPresent("Albert", new Coordinates(2, 2));
        aBookingIsReceived();

        newDriverEvent(closestDriver.id(), ARRIVED_TO_CUSTOMER);
        itineraryFinder.setItinerary(new Itinerary(List.of(
                new Coordinates(2, 2),
                new Coordinates(2, 1),
                new Coordinates(2, 0),
                new Coordinates(1, 0),
                new Coordinates(0, 0)
        )));

        assertEquals(
                new Itinerary(List.of(
                        new Coordinates(2, 2),
                        new Coordinates(2, 1),
                        new Coordinates(2, 0),
                        new Coordinates(1, 0),
                        new Coordinates(0, 0)
                )),
                closestDriver.actualItinerary()
        );
    }

}
