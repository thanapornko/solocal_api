const express = require("express");
const userController = require("../controllers/user-controller");
const upload = require("../middlewares/upload");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.patch(
  "/",
  authenticate,
  upload.single("profileImage"),
  userController.updateProfileImage
);
// upload middleware add key"files" => can use req.files
// single method 1 pic .. key = image

// upload = middlewares ของ multipart form

module.exports = router;
