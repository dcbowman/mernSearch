const express = require("express");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge', { useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', function (err){
	console.log('Mongo Error: ', err);
});

db.once('open', function(){
  console.log('Database connection established');
})

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, function() {
  console.log(`Server now on port ${PORT}!`);
});
