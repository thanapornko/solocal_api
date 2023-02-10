const fs = require("fs");
const cloudinary = require("../utils/cloudinary");
const { Destination, Guide } = require("../models");

exports.addDestination = async (req, res, next) => {
  try {
    const value = req.body;
    console.log(value);
    value.destinationId = req.params.destinationId;
    const destination = await Destination.create(value);

    res.status(200).json({ destination });
  } catch (err) {
    next(err);
  }
};

exports.getDestination = async (req, res, next) => {
  try {
    const destinations = await Destination.findOne({
      where: { id: req.params.destinationId },
      include: [{ model: Guide }]
    });

    res.status(200).json({ destinations });
  } catch (err) {
    next(err);
  }
};

exports.getAllDestination = async (req, res, next) => {
  try {
    const destinations = await Destination.findAll();

    res.status(200).json({ destinations });
  } catch (err) {
    next(err);
  }
};

exports.updateDestinationImage = async (req, res, next) => {
  try {
    let value;
    const { image1, image2 } = req.body;
    const image1PublicId = image1
      ? cloudinary.getPublicId(image1)
      : null;
    const image2PublicId = image2
      ? cloudinary.getPublicId(image2)
      : null;

    if (!req.files.image1 && !req.files.image2) {
      createError("destination image is required");
    } else if (req.files.image1 && req.files.image2) {
      const [image1, image2] = await Promise.all([
        cloudinary.upload(
          req.files.image1[0].path,
          image1PublicId
        ),
        cloudinary.upload(
          req.files.image2[0].path,
          image2PublicId
        )
      ]);
      value = { image1, image2 };
    } else if (req.files.image1) {
      const image1 = await cloudinary.upload(
        req.files.image1[0].path,
        image1PublicId
      );
      value = { image1 };
    } else {
      const image2 = await cloudinary.upload(
        req.files.image2[0].path,
        image2PublicId
      );
      value = { image2 };
    }
    await Destination.update(value, {
      where: { id: req.params.destinationId }
    });
    res.status(200).json(value);
  } catch (err) {
    next(err);
  } finally {
    if (req.files.image1) {
      fs.unlinkSync(req.files.image1[0].path);
    }
    if (req.files.image2) {
      fs.unlinkSync(req.files.image2[0].path);
    }
  }
};
