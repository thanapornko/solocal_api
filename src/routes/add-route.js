const express = require("express");
const addController = require("../controllers/add-controller");

const router = express.Router();

router.post(
  "/destinations/:destinationId/:guideId",
  addController.addDestination
);
router.post("/guides/:guideId/", addController.addGuide);

module.exports = router;
