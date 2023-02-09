const { Booking } = require("../models");

exports.getUserBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findOne({
      where: { id: req.params.userId },
      attributes: { exclude: ["password"] }
    });
  } catch (err) {
    next(err);
  }
};
