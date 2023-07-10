package com.joffrey.uberclone.unit.usecases;

import com.joffrey.uberclone.businesslogic.domain.driver.Driver;
import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.domain.notification.DriverItineraryUpdateMessage;
import org.junit.jupiter.api.Test;

import java.util.List;

import static com.joffrey.uberclone.businesslogic.domain.notification.EventType.ARRIVED_TO_CUSTOMER;
import static org.junit.jupiter.api.Assertions.assertEquals;

class NotificationTest extends BookingManagementTest {

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

        assertEquals(new DriverItineraryUpdateMessage(
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

        assertEquals(new DriverItineraryUpdateMessage(
                        closestDriver.id(),
                        itineraryToDestination),
                eventNotifier.previousMessageSent());
    }

}