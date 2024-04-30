require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const log = require("./configs/logger.config");
const { PORT, SOCKET_PORT } = require("./configs/server.config");
const seedAdmin = require('./seeder/admin.seeder')
const { HomeRouter, AdminRouter } = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// INITIALIZING DATABASE CONNECTION
require("./configs/db.config");

app.use(
  cookieSession({
    name: "session",
    keys: ["car-consultany-api", "session", "backend"],
    maxAge: 24 * 60 * 60 * 100,
  })
);



// Middleware function to trim req.body
app.use((req, res, next) => {
  // Check if the request has a body
  if (req.body) {
    Object.keys(req.body).forEach((key) => {
      if (typeof req.body[key] === "string") {
        req.body[key] = req.body[key].trim();
      }
    });
  }
  console.log("HTTP method is " + req.method + ", URL -" + req.url);
  next(); // Proceed to the next middleware or route handler
});

app.use("/api/v1", HomeRouter);
app.use("/api/v1", AdminRouter);
seedAdmin();


app.listen(PORT, () => {
  // Start Express app server
  log.info(`Express server listening to the port ${PORT}`);
});
