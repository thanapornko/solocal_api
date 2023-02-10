const {
  Booking,
  Destination,
  Guide
} = require("../models");

exports.confirmBooking = async (req, res, next) => {
  try {
    const value = req.body;
    value.userId = req.user.id;
    const booking = await Booking.create(value);
  } catch (err) {
    next(err);
  }
};

exports.deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findOne({
      where: { id: req.params.destinationId }
    });
    if (!booking) {
      createError("no booking ka", 400);
    }
    if (booking.userId !== req.user.id) {
      createError(
        "you have no permission to delete ka",
        403
      );
    }
    console.log(req.user.id);
    await booking.destroy();
    res.status(204).json({ message: "already delete ka" });
  } catch (err) {
    next(err);
  }
};
