const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const bookingController = require("../controllers/booking-controller");

// ?:destinationId ไม่ใส่ ใส่แค่ /
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

router.get(
  "/:userId",
  authenticate,
  bookingController.getBooking
);

module.exports = router;
