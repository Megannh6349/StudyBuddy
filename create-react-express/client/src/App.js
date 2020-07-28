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
const routes = require('./users/routes')
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
