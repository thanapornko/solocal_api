const omise = require("omise")({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY
});

exports.confirmBooking = async (req, res, next) => {
  try {
    const value = req.body;
    value.userId = req.user.id;

    console.log(value, "valueee");

    const customer = await omise.customers.create({
      email: value.email,
      description: value.name,
      card: value.token
    });

    const charge = await omise.charges.create({
      amount: value.amount,
      currency: "thb",
      customer: customer.id
    });

    const existingBooking = await Booking.findOne({
      where: {
        [Op.and]: [
          { date: new Date(value.date) },
          { guideId: value.guideId }
        ]
      }
    });

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

    res.status(200).send({
      message: "Booking successfully",
      amount: charge.amount,
      status: charge.status
    });
  } catch (err) {
    next(err);
  }
};
