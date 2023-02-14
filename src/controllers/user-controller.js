const fs = require("fs");
// library node.js => handle file
const { User } = require("../models");
const createError = require("../utils/create-error");
const cloudinary = require("../utils/cloudinary");

exports.updateProfileImage = async (req, res, next) => {
  try {
    let value;
    // if (!req.file) {
    //   createError("profile image is require");
    // }
    console.log(req.file);
    // req.files has path as key

    // upload (filepath, publicId)
    const profileImage = await cloudinary.upload(
      req.file.path,
      req.user.profileImage
        ? cloudinary.getPublicId(req.user.profileImage)
        : null
    );

    value = { profileImage };
    console.log("********");
    console.log(req.user.profileImage);
    console.log("********");
    await User.update(value, {
      where: { id: req.user.id }
    });
    res.status(200).json(value);
    // value = url profileImage
    // "profileImage": "https://res.cloudinary.com/dhgny94kc/image/upload/v1675919318/1675915242378428504823.jpg"
  } catch (err) {
    next(err);
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path);
      // delete file
    }
  }
};

exports.updateUserName = async (req, res, next) => {
  try {
    const value = req.body;
    console.log(
      "-----------------------------> ",
      req.body
    );
    await User.update(value, {
      where: { id: req.user.id }
    });
    res.status(200).json(value);
  } catch (err) {
    next(err);
  }
};
