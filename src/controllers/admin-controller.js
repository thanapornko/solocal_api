const {
  Booking,
  Destination,
  Guide,
  User
} = require("../models");
const createError = require("../utils/create-error");

exports.getAllBooking = async (req, res, next) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        { model: Guide, include: { model: Destination } },
        { model: User }
      ]
    });

    res.status(200).json({ bookings });
  } catch (err) {
    next(err);
  }
};

exports.getBkkBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findAll({
      include: [
        {
          model: Guide,
          where: { destinationId: 1 },
          include: { model: Destination }
        },
        { model: User }
      ]
    });

    res.status(200).json({ booking });
  } catch (err) {
    next(err);
  }
};
exports.getTaoBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findAll({
      include: [
        {
          model: Guide,
          where: { destinationId: 2 },
          include: { model: Destination }
        },
        { model: User }
      ]
    });

    res.status(200).json({ booking });
  } catch (err) {
    next(err);
  }
};
exports.getCnxBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findAll({
      include: [
        {
          model: Guide,
          where: { destinationId: 3 },
          include: { model: Destination }
        },
        { model: User }
      ]
    });

    res.status(200).json({ booking });
  } catch (err) {
    next(err);
  }
};
