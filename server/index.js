const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.listen(500, () => {
  console.log("Server has started on port 5000")
});