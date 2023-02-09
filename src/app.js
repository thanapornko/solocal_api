require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const userRoute = require("./routes/user-route");
const addRoute = require("./routes/add-route");
const authRoute = require("./routes/auth-route");
const destinationRoute = require("./routes/destination-route");
const bookingRoute = require("./routes/booking-route");
const authenticateMiddleware = require("./middlewares/authenticate");
const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");

// const { sequelize } = require("./models");
// sequelize.sync({ force: true });
const app = express();

app.use(morgan("dev"));
app.use(rateLimit({ windowMs: 1000 * 60 * 15, max: 500 }));
app.use(helmet());
app.use(cors());
app.use(express.json());
// passing req body app/json === cannot handle multi part form data

app.use("/auth", authRoute);
app.use("/add", addRoute);
app.use("/users", userRoute);

app.use(
  "/mybookings",
  authenticateMiddleware,
  bookingRoute
);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`server running on port: ${port}`)
);
