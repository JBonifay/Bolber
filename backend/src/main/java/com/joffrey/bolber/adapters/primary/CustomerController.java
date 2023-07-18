package com.joffrey.bolber.adapters.primary;

import com.joffrey.bolber.business.BookingManagement;
import com.joffrey.bolber.business.domain.messaging.CustomerMessage;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class CustomerController {

    private final BookingManagement bookingManagement;

    public CustomerController(BookingManagement bookingManagement) {
        this.bookingManagement = bookingManagement;
    }


    @GetMapping("/api/customers")
    public ResponseEntity<List<CustomerMessage>> getDrivers() {
        return ResponseEntity.ok(bookingManagement.customersOnHold().stream().map(customer -> new CustomerMessage(customer.customerId(), customer.pickupPoint())).toList());
    }
}
