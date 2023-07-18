package com.joffrey.bolber.unit.business;

import com.joffrey.bolber.adapters.InMemoryBookingRepository;
import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.domain.booking.Booking;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.Driver;
import com.joffrey.bolber.business.domain.driver.NavigationSystem;
import com.joffrey.bolber.business.domain.map.Block;
import com.joffrey.bolber.business.domain.messaging.CustomerEventMessage;
import com.joffrey.bolber.business.domain.messaging.DriverMessage;
import com.joffrey.bolber.business.domain.pathfinding.BFS;
import com.joffrey.bolber.business.domain.simulation.FakeSimulationProperties;
import com.joffrey.bolber.doubles.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.UUID;

import static com.joffrey.bolber.business.domain.driver.DriverStatus.*;
import static com.joffrey.bolber.business.domain.messaging.SimulationEventType.PICKUP;
import static com.joffrey.bolber.fixtures.BlockFixtures.I;
import static com.joffrey.bolber.fixtures.BlockFixtures.R;
import static com.joffrey.bolber.fixtures.MapFixtures.map;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class NavigationSystemTest {
    private DriverManagement driverManagement;

    @BeforeEach
    void setUp() {
        driverManagement = new DriverManagement();
    }

    @Test
    void driver_status_should_be_waiting_for_ride_when_idle() {
        Driver driver = new Driver(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), "Albert", new Coordinates(10, 10), new NavigationSystemStub());
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
        DriverNotificationSpy driverNotification = new DriverNotificationSpy();
        NavigationSystem navigationSystem = new NavigationSystem(new FakeSimulationProperties(), driverNotification, new SimulationNotificationStub(), new BFS(), map());
        Driver driver = new Driver(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), "Albert", new Coordinates(0, 0), navigationSystem);
        driver.setOnRideFinishedListener(new OnRideFinishedListenerStub());
        driver.setRideInfo(new Booking(UUID.randomUUID(), new Coordinates(2, 0), new Coordinates(4, 0)));
        driver.startRide();

        assertEquals(List.of(
                new DriverMessage(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), DRIVING_TO_CUSTOMER, new Coordinates(0, 0)),
                new DriverMessage(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), DRIVING_TO_CUSTOMER, new Coordinates(1, 0)),
                new DriverMessage(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), DRIVING_TO_CUSTOMER, new Coordinates(2, 0)),
                new DriverMessage(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), DRIVING_TO_DESTINATION, new Coordinates(2, 0)),
                new DriverMessage(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), DRIVING_TO_DESTINATION, new Coordinates(3, 0)),
                new DriverMessage(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), DRIVING_TO_DESTINATION, new Coordinates(4, 0))
        ), driverNotification.receivedMessages());
    }

    @Test
    void should_send_event_pickup_when_customer_has_been_picked_up() {
        SimulationNotificationSpy simulationNotification = new SimulationNotificationSpy();
        NavigationSystem navigationSystem = new NavigationSystem(new FakeSimulationProperties(), new DriverNotificationStub(), simulationNotification, new PathFindingAlgorithmStub(), map());
        navigationSystem.setNavigationListener(new NavigationListenerStub());
        Driver driver = new Driver(UUID.randomUUID(), "DriverName", new Coordinates(0, 0), navigationSystem);
        driver.setOnRideFinishedListener(new OnRideFinishedListenerStub());
        driver.setRideInfo(new Booking(UUID.fromString("1e9e229b-98a5-496f-b52e-1392d40c8a4d"), new Coordinates(10, 10), new Coordinates(40, 23)));
        driverManagement.addDriver(driver);

        driver.onArrivedToCustomer();

        assertEquals(
                new CustomerEventMessage(UUID.fromString("1e9e229b-98a5-496f-b52e-1392d40c8a4d"), PICKUP),
                simulationNotification.previousNotification()
        );
    }

    private void assertDriverWasFollowingItinerary(Block[] map, Coordinates driver, Coordinates customer, Coordinates destination, List<Coordinates> expected) {
        NavigationSystem navigationSystem = new NavigationSystem(
                new FakeSimulationProperties(),
                new DriverNotificationSpy(),
                new SimulationNotificationStub(),
                new BFS(),
                map);
        DriverSpy currentDriver = new DriverSpy(UUID.fromString("bbd54a9b-e07c-4026-8199-bd2eee6b17de"), "Eric", driver, navigationSystem);
        currentDriver.setRideInfo(new Booking(UUID.randomUUID(), customer, destination));
        currentDriver.setOnRideFinishedListener(new OnRideFinishedListenerStub());
                
        currentDriver.startRide();

        assertEquals(List.of(DRIVING_TO_CUSTOMER, DRIVING_TO_DESTINATION, WAITING_FOR_RIDE), currentDriver.updatedStatus());
        assertEquals(expected, currentDriver.updatedPositions());
    }
}
