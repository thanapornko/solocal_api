const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const bookingController = require("../controllers/booking-controller");

router.post(
  "/:destinationId",
  authenticate,
  bookingController.confirmBooking
);

router.delete(
  "/:destinationId",
  authenticate,
  bookingController.deleteBooking
);

module.exports = router;
