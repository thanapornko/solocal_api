const express = require("express");
const guideController = require("../controllers/guide-controller");
const upload = require("../middlewares/upload");

const router = express.Router();

router.patch(
  "/:guideId",
  upload.single("profileImage"),
  guideController.updateGuideImage
);

module.exports = router;
