 //setting up  our express server
 const express = require('express');
 const app = express();
 
 // body parser
 app.use(express.json());

 const dotenv = require("dotenv");

 dotenv.config();

 const PORT = process.env.PORT;

 //  import routes
 const authRoutes = require('./middleware/auth');
// route middlewares
 app.use('/api/user', authRoutes);

 // connecting our database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
() => console.log('connected to db')
);


 app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:" + PORT);
  });

//  mongodb+srv://root:<password>@cluster0.fhygf.mongodb.net/<dbname>?retryWrites=true&w=majority

// {
//   "name": "Mario",
//   "email": "kun.zizinho@gmail.com",
//   "password": "password123"
// }