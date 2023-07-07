package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.domain.notification.DriverItineraryUpdateMessage;
import com.joffrey.uberclone.businesslogic.ports.DriverItineraryEventNotifier;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.UUID;

public class SpringDriverItineraryEventNotifier implements DriverItineraryEventNotifier {

    private final SimpMessagingTemplate simpMessagingTemplate;

    public SpringDriverItineraryEventNotifier(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @Override
    public void notifyNewItinerary(UUID driverId, Itinerary newItinerary) {
        simpMessagingTemplate.convertAndSend("/topic/drivers-itinerary", new DriverItineraryUpdateMessage(driverId, newItinerary));
    }

}
