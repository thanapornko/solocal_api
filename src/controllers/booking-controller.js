const {
  Booking,
  Destination,
  Guide
} = require("../models");
const { Op } = require("sequelize");
const createError = require("../utils/create-error");

exports.confirmBooking = async (req, res, next) => {
  try {
    const value = req.body;
    value.userId = req.user.id;

    const existingBooking = await Booking.findOne({
      where: {
        [Op.and]: [
          { date: new Date(value.date) },
          { destinationId: value.destinationId }
        ]
      }
    });
    console.log(value.date);
    console.log(existingBooking);

    if (existingBooking) {
      return createError("Booking not available", 400);
    }
    const userExistingBooking = await Booking.findOne({
      where: { userId: value.userId }
    });

    if (userExistingBooking) {
      return createError(
        "You cannot create more than 1 booking",
        400
      );
    }
    const booking = await Booking.create(value);
    res
      .status(200)
      .send({ message: "booking succesfully" });
  } catch (err) {
    next(err);
  }
};

exports.deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findOne({
      where: { id: req.params.bookingId }
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
    // console.log(req.user.id);
    await booking.destroy();
    res.status(200).json({ message: "already delete ka" });
  } catch (err) {
    next(err);
  }
};

exports.getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findOne({
      where: { userId: req.user.id },
      include: [
        { model: Destination, include: [{ model: Guide }] }
      ]
    });
    console.log(req.user.id);

    res.status(200).json({ booking });
  } catch (err) {
    next(err);
  }
};
