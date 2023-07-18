package com.joffrey.bolber.doubles;

import com.joffrey.bolber.business.domain.booking.OnRideFinishedListener;
import com.joffrey.bolber.business.domain.driver.Coordinates;
import com.joffrey.bolber.business.domain.driver.NavigationListener;

public class NavigationListenerStub implements NavigationListener {
    @Override
    public void onArrivedToCustomer() {
        
    }

    @Override
    public void onArrivedToDestination() {

    }

    @Override
    public void onMove(Coordinates coordinates) {

    }

    @Override
    public void setOnRideFinishedListener(OnRideFinishedListener onRideFinishedListener) {
        
    }
}
