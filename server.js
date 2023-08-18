const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const routes = require("./routes/crudRoute");

// declaratioons
const port = process.env.PORT;
const db = process.env.MONG_URI;

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/", routes);

//connecting to db
try {
  mongoose.connect(db).then(() => {
    app.listen(port, () => {
      console.log("connected");
    });
  });
} catch (err) {
  res.send(err);
}
