package com.joffrey.bolber.business.domain.driver;

public interface NavigationListener {
    void onArrivedToCustomer();
    void onArrivedToDestination();

    void onMove(Coordinates coordinates);
}
