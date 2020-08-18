 //setting up  our express server
 const express = require('express');
 const app = express();
 
 // body parser
 app.use(express.json());

 const dotenv = require("dotenv");

 dotenv.config();

 const PORT = process.env.PORT || 8000;

 //  import routes
 const authRoutes = require('./middleware/auth');
 const dashboardRoutes = require("./middleware/dashboard");
 const verifyToken = require("./middleware/validate-token");

 // route middlewares
 app.use('/api/user', authRoutes);

 // this route is protected with token
 app.use("/api/dashboard", verifyToken, dashboardRoutes);

 // connecting our database
 const mongoose = require('mongoose');
 mongoose.connect(process.env.MONGODB_URI || "mongodb://drew:drew123@ds247178.mlab.com:47178/heroku_6drj69t0",
 {
   useMongoClient: true
 }
 );

 app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:" + PORT);
  });
