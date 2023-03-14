const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");

// add authen for admin
router.get("/", adminController.getAllBooking);
router.get("/bkk", adminController.getBkkBooking);
router.get("/tao", adminController.getTaoBooking);
router.get("/cnx", adminController.getCnxBooking);

module.exports = router;
