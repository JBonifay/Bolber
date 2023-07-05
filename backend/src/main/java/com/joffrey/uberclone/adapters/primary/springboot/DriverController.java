package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.businesslogic.domain.map.Coordinates;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import java.util.UUID;

@Controller
public class DriverController {

    private final DriverManager driverManager;

    public DriverController(DriverManager driverManager) {
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
                        driver.startingCoordinates())
                ).toArray(DriverMessage[]::new);
    }
}
