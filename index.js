require("dotenv").config();
const express = require("express");
const cors = require("cors");

// init app
const app = express();

// enable CORS for freeCodeCamp
app.use(cors({ optionsSuccessStatus: 200 }));

// serve site files 'public' folder
app.use(express.static("public"));

// Request Header Parser Microservice
app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.get("accept-language"),
    software: req.get("user-agent"),
  });
});

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
