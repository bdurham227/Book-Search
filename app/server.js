const express = require('express');
const mongoose = require('mongoose');
//routes

const PORT = process.env.PORT || 3001;
const app = express();


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// server up static
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// use API routes


// mongo db connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearch", { useNewUrlParser: true });

// server listening on
app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`)
});