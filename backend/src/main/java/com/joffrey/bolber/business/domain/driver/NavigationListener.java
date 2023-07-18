package com.joffrey.bolber.business.domain.driver;

import com.joffrey.bolber.business.domain.booking.OnRideFinishedListener;

public interface NavigationListener {
    void onArrivedToCustomer();

    void onArrivedToDestination();

    void onMove(Coordinates coordinates);

    void setOnRideFinishedListener(OnRideFinishedListener onRideFinishedListener);
}
