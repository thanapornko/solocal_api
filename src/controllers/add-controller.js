const { Destination, Guide } = require("../models");

exports.addDestination = async (req, res, next) => {
  try {
    const value = req.body;
    value.destinationId = req.params.destinationId;
    value.guideId = req.params.guideId;
    const destination = await Destination.create(value);

    res.status(200).json({ destination });
  } catch (err) {
    next(err);
  }
};

exports.addGuide = async (req, res, next) => {
  try {
    const value = req.body;
    // value.destinationId = req.params.destinationId;
    value.guideId = req.params.guideId;
    const guide = await Guide.create(value);

    res.status(200).json({ guide });
  } catch (err) {
    next(err);
  }
};
