const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// app.put("/exercise", (err, { body }) => {
//   const data = body;


// })
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});