# Booking Management:

[//]: # (* A booking should be created randomly for a client.)

[//]: # (* Each customer should have a unique identifier, name.)

[//]: # (* Each booking should have a unique identifier, timestamp, customer details, departure location, destination location,)

[//]: # (  and status.)

[//]: # (* The initial status of a booking should be "WAITING_FOR_DRIVER".)

# Assigning a Driver to a Booking:

[//]: # (* Drivers should have a unique identifier, name)

[//]: # (* Each driver should have a status, indicating their availability and current state.)

[//]: # (* When a booking is created, the system should assign the closest available driver to it based on the driver's current)

[//]: # (  location.)

[//]: # (* If no drivers are available, the system should handle this scenario appropriately, such as putting the booking in a)
[//]: # (  queue or notifying the customer.)

# Updating Booking and Driver Status:

[//]: # (* The driver's status should be set to "DRIVING_TO_CUSTOMER" to indicate that they are en route to the customer's location.)
[//]: # (* When the driver arrives at the customer's location, the driver's status should be updated to "DRIVING_TO_DESTINATION", indicating)

[//]: # (  that they are heading towards the destination.)

# Itinerary Calculation and Notification:

[//]: # (* The system should calculate the shortest itinerary from the driver's location to the customer's location and notify)

[//]: # (  the frontend with this information.)
[//]: # (* Similarly, the system should calculate the shortest itinerary from the customer's location to the destination and)
[//]: # (  notify the frontend accordingly.)

# Completion and Availability:

[//]: # (* When the driver arrives at the destination, the frontend should notify the backend to update the booking's status to "COMPLETED".)
[//]: # (* Simultaneously, the driver's status should be set to "AVAILABLE" to indicate their availability for future bookings.)