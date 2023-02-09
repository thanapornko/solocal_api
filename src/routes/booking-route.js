const express = require("express");
const bookingController = require("../controllers/booking-controller");

// const authController = require("../controllers/auth-controller");
// const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/:userId", bookingController.getUserBooking);

module.exports = router;
