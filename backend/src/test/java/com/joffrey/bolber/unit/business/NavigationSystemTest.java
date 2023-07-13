package com.joffrey.bolber.unit.business;

import com.joffrey.bolber.adapters.InMemoryBookingRepository;
import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.domain.driver.DriverMessage;
import com.joffrey.bolber.business.domain.driver.NavigationSystem;
import com.joffrey.bolber.business.domain.map.Block;
import com.joffrey.bolber.business.domain.pathfinding.BFS;
import com.joffrey.bolber.business.domain.simulation.FakeSimulationProperties;
import com.joffrey.bolber.doubles.DriverNotificationStub;
import com.joffrey.bolber.doubles.DriverSpy;
import com.joffrey.bolber.doubles.NavigationSystemStub;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static com.joffrey.bolber.business.domain.driver.DriverStatus.*;
import static com.joffrey.bolber.fixtures.BlockFixtures.I;
import static com.joffrey.bolber.fixtures.BlockFixtures.R;
import static com.joffrey.bolber.fixtures.MapFixtures.map;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class NavigationSystemTest {
    private DriverManagement driverManagement;
    private BookingManagement bookingManagement;

    @BeforeEach
    void setUp() {
        driverManagement = new DriverManagement();
        bookingManagement = new BookingManagement(new InMemoryBookingRepository(), driverManagement);
    }

    @Test
    void driver_status_should_be_waiting_for_ride_when_idle() {
        Driver driver = new Driver("Albert", new Coordinates(10, 10), new NavigationSystemStub(new FakeSimulationProperties(), null));
        assertEquals(WAITING_FOR_RIDE, driver.status());
    }

    @Test
    void driver_should_follow_itinerary_to_destination_when_booking_received() {
        assertDriverWasFollowingItinerary(new Block[]{
                        R(0, 0), R(1, 0)
                }, new Coordinates(0, 0),
                new Coordinates(1, 0),
                new Coordinates(0, 0),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0),
                        new Coordinates(1, 0),
                        new Coordinates(0, 0)
                ));

        assertDriverWasFollowingItinerary(new Block[]{
                        R(0, 0), R(1, 0), R(2, 0), R(3, 0)
                }, new Coordinates(0, 0),
                new Coordinates(3, 0),
                new Coordinates(0, 0),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0),
                        new Coordinates(2, 0),
                        new Coordinates(3, 0),
                        new Coordinates(3, 0),
                        new Coordinates(2, 0),
                        new Coordinates(1, 0),
                        new Coordinates(0, 0)
                ));

        assertDriverWasFollowingItinerary(new Block[]{
                        R(0, 0),
                        R(0, 1)
                }, new Coordinates(0, 0),
                new Coordinates(0, 1),
                new Coordinates(0, 0),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(0, 1),
                        new Coordinates(0, 1),
                        new Coordinates(0, 0)
                ));

        assertDriverWasFollowingItinerary(new Block[]{
                        R(0, 0),
                        R(0, 1),
                        R(0, 2),
                        R(0, 3)
                }, new Coordinates(0, 0),
                new Coordinates(0, 3),
                new Coordinates(0, 0),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(0, 1),
                        new Coordinates(0, 2),
                        new Coordinates(0, 3),
                        new Coordinates(0, 3),
                        new Coordinates(0, 2),
                        new Coordinates(0, 1),
                        new Coordinates(0, 0)
                ));

        assertDriverWasFollowingItinerary(new Block[]{
                        R(0, 0), R(1, 0), R(2, 0),
                        R(0, 1), R(1, 1), R(2, 1),

                }, new Coordinates(0, 0),
                new Coordinates(2, 1),
                new Coordinates(0, 0),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(1, 0),
                        new Coordinates(2, 0),
                        new Coordinates(2, 1),
                        new Coordinates(2, 1),
                        new Coordinates(2, 0),
                        new Coordinates(1, 0),
                        new Coordinates(0, 0)
                ));

        assertDriverWasFollowingItinerary(new Block[]{
                        R(0, 0), I(1, 0), R(2, 0), R(3, 0), R(4, 0),
                        R(0, 1), R(1, 1), R(2, 1), I(3, 1), R(4, 1),
                        R(0, 2), R(1, 2), R(2, 2), I(3, 2), R(4, 2),
                        I(0, 3), I(1, 3), I(2, 3), I(3, 3), R(4, 3),
                        R(0, 4), R(1, 4), R(2, 4), R(3, 4), R(4, 4),

                }, new Coordinates(0, 0),
                new Coordinates(4, 4),
                new Coordinates(0, 0),
                List.of(
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
                        new Coordinates(4, 4),
                        new Coordinates(4, 4),
                        new Coordinates(4, 3),
                        new Coordinates(4, 2),
                        new Coordinates(4, 1),
                        new Coordinates(4, 0),
                        new Coordinates(3, 0),
                        new Coordinates(2, 0),
                        new Coordinates(2, 1),
                        new Coordinates(1, 1),
                        new Coordinates(0, 1),
                        new Coordinates(0, 0)
                ));

        assertDriverWasFollowingItinerary(new Block[]{
                        R(0, 0), I(1, 0), R(2, 0), R(3, 0), R(4, 0),
                        R(0, 1), R(1, 1), R(2, 1), I(3, 1), R(4, 1),
                        R(0, 2), R(1, 2), R(2, 2), I(3, 2), R(4, 2),
                        I(0, 3), I(1, 3), I(2, 3), I(3, 3), R(4, 3),
                        R(0, 4), R(1, 4), R(2, 4), R(3, 4), R(4, 4),
                }, new Coordinates(0, 0),
                new Coordinates(2, 1),
                new Coordinates(4, 4),
                List.of(
                        new Coordinates(0, 0),
                        new Coordinates(0, 1),
                        new Coordinates(1, 1),
                        new Coordinates(2, 1),
                        new Coordinates(2, 1),
                        new Coordinates(2, 0),
                        new Coordinates(3, 0),
                        new Coordinates(4, 0),
                        new Coordinates(4, 1),
                        new Coordinates(4, 2),
                        new Coordinates(4, 3),
                        new Coordinates(4, 4)
                ));
    }

    @Test
    void should_notify_when_current_position_change() {
        DriverNotificationStub notificationStub = new DriverNotificationStub();
        NavigationSystem navigationSystem = new NavigationSystem(new FakeSimulationProperties(), notificationStub, new BFS(), map());
        Driver driver = new Driver("Albert", new Coordinates(0, 0), navigationSystem);
        driver.setDestinations(new Coordinates(2, 0), new Coordinates(4, 0));
        driver.startRide();

        assertEquals(List.of(
                new DriverMessage(DRIVING_TO_CUSTOMER, new Coordinates(0, 0)),
                new DriverMessage(DRIVING_TO_CUSTOMER, new Coordinates(1, 0)),
                new DriverMessage(DRIVING_TO_CUSTOMER, new Coordinates(2, 0)),
                new DriverMessage(DRIVING_TO_DESTINATION, new Coordinates(2, 0)),
                new DriverMessage(DRIVING_TO_DESTINATION, new Coordinates(3, 0)),
                new DriverMessage(DRIVING_TO_DESTINATION, new Coordinates(4, 0))
        ), notificationStub.receivedMessages());
    }

    private void assertDriverWasFollowingItinerary(Block[] map, Coordinates driver, Coordinates customer, Coordinates destination, List<Coordinates> expected) {
        NavigationSystem navigationSystem = new NavigationSystem(
                new FakeSimulationProperties(),
                new DriverNotificationStub(),
                new BFS(),
                map);
        DriverSpy currentDriver = new DriverSpy("Eric", driver, navigationSystem);

        currentDriver.setDestinations(customer, destination);
        currentDriver.startRide();

        assertEquals(List.of(DRIVING_TO_CUSTOMER, DRIVING_TO_DESTINATION, WAITING_FOR_RIDE), currentDriver.updatedStatus());
        assertEquals(expected, currentDriver.updatedPositions());
    }
}
