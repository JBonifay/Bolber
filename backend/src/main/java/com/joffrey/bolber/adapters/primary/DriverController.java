package com.joffrey.bolber.adapters.primary;

import com.joffrey.bolber.business.DriverManagement;
import com.joffrey.bolber.business.domain.messaging.DriverMessage;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class DriverController {

    private final DriverManagement driverManagement;

    public DriverController(DriverManagement driverManagement) {
        this.driverManagement = driverManagement;
    }

    @GetMapping("/api/drivers")
    public ResponseEntity<List<DriverMessage>> getDrivers() {
        return ResponseEntity.ok(
                driverManagement.drivers()
                        .stream()
                        .map(driver -> new DriverMessage(driver.driverId(), driver.status(), driver.currentCoordinates()))
                        .collect(Collectors.toList()));
    }
}
