package com.joffrey.uberclone.adapters.primary.springboot;

import com.joffrey.uberclone.businesslogic.domain.driver.DriverManager;
import com.joffrey.uberclone.businesslogic.domain.notification.DriverMessage;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

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
                        driver.startingCoordinates())
                ).toArray(DriverMessage[]::new);
    }
}
