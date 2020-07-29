
//requ our servers 
const express = require("express");
// Helmet helps you secure your Express apps by setting various HTTP headers.
const helmet = require("helmet");
// Cross-origin resource sharing (CORS)
const cors = require("cors");
// database mongo db
const morgan = require("morgan");
const mongoose = require("mongoose");


require("dotenv").config();
const port = process.env.PORT || 3001;
const mongoDB =
  process.env.NODE_ENV !== "test"
    ? process.env.MONGODB
    : process.env.MONGODBTEST;


require('dotenv').config();
const routes = require('./client/src/users/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

//  formating  if our enviroment is not production
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("tiny"));
}

// routes
app.use('./client/src/users', routes);
// our server listener
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.connection.on("error", err => {
  console.error(err.message);
});

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = server;
