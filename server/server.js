const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.get("/", (request, response) => {
  return response.json("Ho, Ho, Ho, Merry Xmas! Ya filthy animal!");
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
