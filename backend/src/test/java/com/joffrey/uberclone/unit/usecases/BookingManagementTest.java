package com.joffrey.uberclone.unit.usecases;

import com.joffrey.uberclone.adapters.primary.springboot.SpringDriverEventReceiver;
import com.joffrey.uberclone.adapters.secondary.repository.InMemoryBookingRepository;
import com.joffrey.uberclone.businesslogic.domain.booking.Customer;
import com.joffrey.uberclone.businesslogic.domain.driver.Driver;
import com.joffrey.uberclone.businesslogic.domain.driver.DriverAssignment;
import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.businesslogic.domain.driver.NearestDriverLocator;
import com.joffrey.uberclone.businesslogic.domain.itinerary.*;
import com.joffrey.uberclone.businesslogic.domain.map.Block;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.domain.map.SimulationMap;
import com.joffrey.uberclone.businesslogic.domain.notification.EventType;
import com.joffrey.uberclone.businesslogic.ports.DriverEventReceiver;
import com.joffrey.uberclone.businesslogic.usecases.BookingManagement;
import com.joffrey.uberclone.testdouble.BookingSchedulerStub;
import com.joffrey.uberclone.testdouble.DriverItineraryEventNotifierSpy;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BookingManagementTest {

    final ItineraryFinderStub itineraryFinder = new ItineraryFinderStub();
    final DriverItineraryEventNotifierSpy eventNotifier = new DriverItineraryEventNotifierSpy();
    final DriverManager driverManagement = new DriverManager(new DriverAssignment(eventNotifier, itineraryFinder, new NearestDriverLocator()));
    final InMemoryBookingRepository bookingRepository = new InMemoryBookingRepository();
    final BookingManagement bookingManagement = new BookingManagement(bookingRepository, driverManagement);
    final BookingSchedulerStub bookingScheduler = new BookingSchedulerStub(bookingManagement);
    final DriverEventReceiver driverEventReceiver = new SpringDriverEventReceiver(bookingManagement);


    void aBookingIsReceived() {
        Coordinates departure = new Coordinates(0, 0);
        Coordinates destination = new Coordinates(2, 2);
        Customer customer = new Customer(UUID.fromString("986d1ce4-1805-11ee-be56-0242ac120002"), "Robert");
        bookingScheduler.setData(customer, departure, destination);
        bookingScheduler.start();
    }

    void newDriverEvent(UUID driverId, EventType eventType) {
        driverEventReceiver.handle(driverId, eventType);
    }

    Driver aDriverIsPresent(String driverName, Coordinates position) {
        Driver driver = new Driver(UUID.randomUUID(), driverName, position);
        driverManagement.addDriver(driver);
        return driver;
    }

    void assertItineraryIsTheShortest(Block[] map, Coordinates startCoordinates, Coordinates endCoordinates, Itinerary expected) {
        ItineraryFinder pathFindingUseCase = new PathFindingItineraryFinder(
                new BFS(
                        new NeighborFinder(),
                        new PathReconstruct()
                ), new SimulationMap(map));
        assertEquals(expected, pathFindingUseCase.findShortestItinerary(startCoordinates, endCoordinates));
    }
}
