package com.joffrey.uberclone.unit.usecases;

import com.joffrey.uberclone.adapters.secondary.BookingSchedulerStub;
import com.joffrey.uberclone.adapters.secondary.EventNotifierStub;
import com.joffrey.uberclone.adapters.secondary.EventReceiverStub;
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
import com.joffrey.uberclone.businesslogic.domain.notification.DriverUpdateMessage;
import com.joffrey.uberclone.businesslogic.domain.notification.EventType;
import com.joffrey.uberclone.businesslogic.ports.EventReceiver;
import com.joffrey.uberclone.businesslogic.usecases.BookRideUseCase;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.UUID;

import static com.joffrey.uberclone.businesslogic.domain.booking.BookingStatus.*;
import static com.joffrey.uberclone.businesslogic.domain.driver.DriverStatus.*;
import static com.joffrey.uberclone.businesslogic.domain.notification.EventType.ARRIVED_TO_CUSTOMER;
import static com.joffrey.uberclone.businesslogic.domain.notification.EventType.ARRIVED_TO_DESTINATION;
import static com.joffrey.uberclone.fixtures.BlockFixtures.I;
import static com.joffrey.uberclone.fixtures.BlockFixtures.R;
import static org.junit.jupiter.api.Assertions.assertEquals;

class BookRideUseCaseTest {
    private final InMemoryBookingRepository bookingRepository = new InMemoryBookingRepository();
    private final ItineraryFinderStub itineraryFinder = new ItineraryFinderStub();
    private final EventNotifierStub eventNotifier = new EventNotifierStub();
    private final DriverAssignment driverAssignment = new DriverAssignment(eventNotifier, itineraryFinder, new NearestDriverLocator());
    private final DriverManager driverManagement = new DriverManager(driverAssignment);
    private final BookRideUseCase bookRideUseCase = new BookRideUseCase(bookingRepository, driverManagement);
    private final BookingSchedulerStub bookingScheduler = new BookingSchedulerStub(bookRideUseCase);
    private final EventReceiver eventReceiver = new EventReceiverStub(bookRideUseCase);

    @Nested
    class BookingStatusValidation {

        @Test
        void booking_status_should_be_pending_when_booking_created_and_no_driver_assigned() {
            aBookingIsReceived();

            assertEquals(PENDING, bookingRepository.bookings().get(0).status());
        }

        @Test
        void booking_status_should_be_confirmed_when_driver_was_assigned_to_ride() {
            aDriverIsPresent("Albert", new Coordinates(10, 10));
            aBookingIsReceived();

            assertEquals(CONFIRMED, bookingRepository.bookings().get(0).status());
        }

        @Test
        void booking_status_should_be_ongoing_when_driver_has_picked_up_customer() {
            Driver driver = aDriverIsPresent("Heber", new Coordinates(10, 10));
            aBookingIsReceived();

            newDriverEvent(driver.id(), ARRIVED_TO_CUSTOMER);

            assertEquals(ONGOING, bookingRepository.bookings().get(0).status());
        }

        @Test
        void booking_status_should_be_completed_when_driver_arrived_to_destination() {
            Driver driver = aDriverIsPresent("Heber", new Coordinates(10, 10));
            aBookingIsReceived();
            newDriverEvent(driver.id(), ARRIVED_TO_CUSTOMER);

            newDriverEvent(driver.id(), ARRIVED_TO_DESTINATION);

            assertEquals(COMPLETED, bookingRepository.bookings().get(0).status());
        }
    }

    @Nested
    class DriverStatusValidation {

        @Test
        void driver_status_should_be_waiting_for_ride_when_idle() {
            Driver driver = new Driver(UUID.randomUUID(), "Albert", new Coordinates(10, 10));
            assertEquals(WAITING_FOR_RIDE, driver.status());
        }

        @Test
        void driver_status_should_be_driving_to_customer_when_booking_assigned() {
            Driver closestDriver = aDriverIsPresent("Albert", new Coordinates(10, 10));

            aBookingIsReceived();

            assertEquals(DRIVING_TO_CUSTOMER, closestDriver.status());
        }

        @Test
        void driver_status_should_be_driving_to_destination_when_customer_has_been_picked_up() {
            Driver driver = aDriverIsPresent("Heber", new Coordinates(10, 10));
            aBookingIsReceived();

            newDriverEvent(driver.id(), ARRIVED_TO_CUSTOMER);

            assertEquals(DRIVING_TO_DESTINATION, driver.status());
        }

        @Test
        void driver_status_should_be_available_when_customer_has_been_picked_up() {
            Driver driver = aDriverIsPresent("Heber", new Coordinates(10, 10));
            aBookingIsReceived();
            newDriverEvent(driver.id(), ARRIVED_TO_CUSTOMER);

            newDriverEvent(driver.id(), ARRIVED_TO_DESTINATION);

            assertEquals(WAITING_FOR_RIDE, driver.status());
        }

    }

    @Nested
    class DriverAssigmentValidation {

        @Test
        void should_assign_closest_driver_to_booking_one_driver() {
            Driver closestDriver = aDriverIsPresent("Albert", new Coordinates(10, 10));

            aBookingIsReceived();

            assertEquals(closestDriver, bookingRepository.bookings().get(0).driver());
        }

        @Test
        void should_assign_closest_driver_to_booking_two_driver() {
            aDriverIsPresent("Albert", new Coordinates(10, 10));
            Driver closestDriver = aDriverIsPresent("Heber", new Coordinates(1, 1));

            aBookingIsReceived();

            assertEquals(closestDriver, bookingRepository.bookings().get(0).driver());
        }

        @Test
        void should_assign_closest_driver_to_booking_two_driver_inverted() {
            Driver closestDriver = aDriverIsPresent("Albert", new Coordinates(1, 1));
            aDriverIsPresent("Heber", new Coordinates(10, 10));

            aBookingIsReceived();

            assertEquals(closestDriver, bookingRepository.bookings().get(0).driver());
        }

        @Test
        void should_assign_closest_driver_to_booking_three_driver() {
            aDriverIsPresent("Heber", new Coordinates(10, 10));
            aDriverIsPresent("Albert", new Coordinates(1, 1));
            Driver closestDriver = aDriverIsPresent("Yvan", new Coordinates(0, 0));

            aBookingIsReceived();

            assertEquals(closestDriver, bookingRepository.bookings().get(0).driver());
        }

        @Test
        void should_assign_closest_driver_to_booking_seven_driver() {
            aDriverIsPresent("Heber", new Coordinates(10, 10));
            aDriverIsPresent("Albert", new Coordinates(1, 1));
            aDriverIsPresent("Jean", new Coordinates(1, 2));
            aDriverIsPresent("Christine", new Coordinates(2, 1));
            aDriverIsPresent("Bo", new Coordinates(2, 2));
            var closestDriver = aDriverIsPresent("Jade", new Coordinates(0, 1));
            aDriverIsPresent("Bernie", new Coordinates(1, 0));

            aBookingIsReceived();

            assertEquals(closestDriver, bookingRepository.bookings().get(0).driver());
        }

    }

    @Nested
    class ItineraryValidation {

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

    @Nested
    class NotificationValidation {

        @Test
        void should_send_notification_when_driver_is_assigned_itinerary_to_customer() {
            Itinerary itineraryToCustomer = new Itinerary(List.of(
                    new Coordinates(2, 2),
                    new Coordinates(2, 1),
                    new Coordinates(2, 0),
                    new Coordinates(1, 0),
                    new Coordinates(0, 0)
            ));
            Driver closestDriver = aDriverIsPresent("Albert", new Coordinates(2, 2));
            itineraryFinder.setItinerary(itineraryToCustomer);

            aBookingIsReceived();

            assertEquals(new DriverUpdateMessage(
                            closestDriver.id(),
                            itineraryToCustomer),
                    eventNotifier.previousMessageSent());
        }

        @Test
        void should_send_notification_when_driver_is_assigned_itinerary_to_destination() {
            Itinerary itineraryToDestination = new Itinerary(List.of(
                    new Coordinates(2, 2),
                    new Coordinates(2, 1),
                    new Coordinates(2, 0),
                    new Coordinates(1, 0),
                    new Coordinates(0, 0)
            ));
            Driver closestDriver = aDriverIsPresent("Heber", new Coordinates(10, 10));
            aBookingIsReceived();

            itineraryFinder.setItinerary(itineraryToDestination);
            newDriverEvent(closestDriver.id(), ARRIVED_TO_CUSTOMER);

            assertEquals(new DriverUpdateMessage(
                            closestDriver.id(),
                            itineraryToDestination),
                    eventNotifier.previousMessageSent());
        }
    }

    private void aBookingIsReceived() {
        Coordinates departure = new Coordinates(0, 0);
        Coordinates destination = new Coordinates(2, 2);
        Customer customer = new Customer(UUID.fromString("986d1ce4-1805-11ee-be56-0242ac120002"), "Robert");
        bookingScheduler.setData(customer, departure, destination);
        bookingScheduler.start();
    }

    private void newDriverEvent(UUID driverId, EventType eventType) {
        eventReceiver.receive(driverId, eventType);
    }

    private Driver aDriverIsPresent(String driverName, Coordinates position) {
        Driver driver = new Driver(UUID.randomUUID(), driverName, position);
        driverManagement.addDriver(driver);
        return driver;
    }

    private void assertItineraryIsTheShortest(Block[] map, Coordinates startCoordinates, Coordinates endCoordinates, Itinerary expected) {
        ItineraryFinder pathFindingUseCase = new PathFindingItineraryFinder(
                new BFS(
                        new NeighborFinder(),
                        new PathReconstruct()
                ), new SimulationMap(map));
        assertEquals(expected, pathFindingUseCase.findShortestItinerary(startCoordinates, endCoordinates));
    }
}