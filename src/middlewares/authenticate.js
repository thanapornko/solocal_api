const jwt = require("jsonwebtoken");
const createError = require("../utils/create-error");
const { User } = require("../models");

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (
      !authorization ||
      !authorization.startsWith("Bearer ")
    ) {
      createError("you are unthorized", 401);
    }
    // split " " => token => verify
    const token = authorization.split(" ")[1];
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY
    );
    const user = await User.findOne({
      where: { id: payload.id },
      attributes: { exclude: ["password"] }
    });

    if (!user) {
      createError("you are unthorized", 401);
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
