package com.joffrey.uberclone.adapters.secondary;

import com.joffrey.uberclone.businesslogic.domain.notification.EventType;
import com.joffrey.uberclone.businesslogic.ports.EventReceiver;
import com.joffrey.uberclone.businesslogic.usecases.BookRideUseCase;

import java.util.UUID;

public class EventReceiverStub implements EventReceiver {
    private final BookRideUseCase bookRideUseCase;

    public EventReceiverStub(BookRideUseCase bookRideUseCase) {
        this.bookRideUseCase = bookRideUseCase;
    }

    @Override
    public void receive(UUID driverId, EventType eventType) {
        switch (eventType) {
            case ARRIVED_TO_CUSTOMER -> handleDriverArrivedToCustomer(driverId);
            case ARRIVED_TO_DESTINATION -> handleDriverArrivedAtDestination();
        }
    }

    private void handleDriverArrivedToCustomer(UUID driverId) {
        bookRideUseCase.driverArrivedToCustomer(driverId);
    }

    private void handleDriverArrivedAtDestination() {
        bookRideUseCase.driverArrivedAtDestination();
    }
}
