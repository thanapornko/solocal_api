const express = require("express");
const destinationController = require("../controllers/destination-controller");
const upload = require("../middlewares/upload");
const router = express.Router();

router.post(
  "/:destinationId",
  destinationController.addDestination
);

router.patch(
  "/image/:destinationId",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 }
  ]),
  destinationController.updateDestinationImage
);

router.get(
  "/:destinationId",
  destinationController.getDestination
);
router.get("/", destinationController.getAllDestination);

module.exports = router;
