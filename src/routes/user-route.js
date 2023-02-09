const express = require("express");
const userController = require("../controllers/user-controller");
const upload = require("../middlewares/upload");
// const authController = require("../controllers/auth-controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

// router.get("/:userId", userController.getUserInfo); ไม่มีปะ
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
