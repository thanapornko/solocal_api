const fs = require("fs");
const { Guide, Destination } = require("../models");
const createError = require("../utils/create-error");
const cloudinary = require("../utils/cloudinary");

exports.updateGuideImage = async (req, res, next) => {
  try {
    let value;
    if (!req.file) {
      createError("guide image is require");
    }
    // console.log(req.file);
    // req.files has path as key

    // upload (filepath, publicId)
    const profileImage = await cloudinary.upload(
      req.file.path,
      req.profileImage
        ? cloudinary.getPublicId(req.profileImage)
        : null
    );

    value = { profileImage };

    console.log(req.params);

    await Guide.update(value, {
      where: { id: req.params.guideId }
    });
    res.status(200).json(value);
  } catch (err) {
    next(err);
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path);
      // delete file
    }
  }
};

exports.updateGuideInfo = async (req, res, next) => {
  try {
    const value = req.body;
    console.log(value);
    const guide = await Guide.create(value);

    res.status(200).json({ guide });
  } catch (err) {
    next(err);
  }
};
