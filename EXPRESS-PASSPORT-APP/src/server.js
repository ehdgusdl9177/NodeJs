const express = require("express");
const path = require("path");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://k23129177:qwer1234@expree-cluster.9j385iu.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.log("Error connecting");
  });

app.use("/static", express.static(path.join(__dirname, "public")));

const port = 4000;
app.listen(port, () => {
  console.log("listening on port " + port);
});
