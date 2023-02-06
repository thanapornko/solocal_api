require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const authRoute = require("./routes/auth-route");
const destinationRoute = require("./routes/destination-route");
const bookingRoute = require("./routes/booking-route");
const authenticateMiddleware = require("./middlewares/authenticate");
const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");

// const { sequelize } = require("./models");
// sequelize.sync({});
const app = express();

app.use(morgan("dev"));
app.use(rateLimit({ windowMs: 1000 * 60 * 15, max: 1000 }));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
// app.use("/destinations/:id", () => {});
// app.use("/mybookings", () => {});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`server running on port: ${port}`)
);
