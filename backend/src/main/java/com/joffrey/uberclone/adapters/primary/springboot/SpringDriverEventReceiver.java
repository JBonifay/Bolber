package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.domain.notification.DriverEventMessage;
import com.joffrey.uberclone.businesslogic.domain.notification.EventType;
import com.joffrey.uberclone.businesslogic.ports.DriverEventReceiver;
import com.joffrey.uberclone.businesslogic.usecases.BookingManagement;
import com.joffrey.uberclone.businesslogic.usecases.IBookingManagement;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Controller;

import java.util.UUID;

@Controller
public class SpringDriverEventReceiver implements DriverEventReceiver {
    private final IBookingManagement bookingManagement;

    public SpringDriverEventReceiver(IBookingManagement bookingManagement) {
        this.bookingManagement = bookingManagement;
    }

    @MessageMapping("/driver-event")
    public void receiveMessage(@Payload DriverEventMessage driverEventMessage) {
        handle(driverEventMessage.driverId(), driverEventMessage.eventType());
    }

    @Override
    public void handle(UUID driverId, EventType eventType) {
        switch (eventType) {
            case ARRIVED_TO_CUSTOMER -> handleDriverArrivedToCustomer(driverId);
            case ARRIVED_TO_DESTINATION -> handleDriverArrivedAtDestination();
        }
    }

    private void handleDriverArrivedToCustomer(UUID driverId) {
        bookingManagement.driverArrivedToCustomer(driverId);
    }

    private void handleDriverArrivedAtDestination() {
        bookingManagement.driverArrivedAtDestination();
    }
}
