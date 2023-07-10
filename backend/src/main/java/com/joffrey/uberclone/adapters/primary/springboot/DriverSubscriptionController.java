package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.businesslogic.domain.itinerary.Itinerary;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import com.joffrey.uberclone.businesslogic.domain.notification.DriverMessage;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class DriverSubscriptionController {

    private final DriverManager driverManager;

    public DriverSubscriptionController(DriverManager driverManager) {
        this.driverManager = driverManager;
    }

    @SubscribeMapping("/topic/drivers")
    public DriverMessage[] onSubscribe() {
        return driverManager
                .drivers()
                .stream()
                .map(driver -> new DriverMessage(
                        driver.id(),
                        driver.fullName(),
                        driver.startingCoordinates(),
                        driver.actualItinerary())
                ).toArray(DriverMessage[]::new);
    }
}
