const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const eventsRouter = require("./routes/eventsRoute.js");

const { eventsModel } = require("./db/models").eventsModel;

const port = process.env.PORT || 3010;

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// createSampleData;
// eventsModel.create({
//   groupid: "GP01",
//   eventname: "EVENT01",
//   startdatetime: "2020-02-17 23:00:00",
//   enddatetime: "2020-02-17 23:00:00",
// });

app.use("/events", eventsRouter);

app.use(function (req, res, next) {
  res.status(404).send("Not found");
});

app.use(function (err, req, res, next) {
  res.status(500).send("Internal Server");
});

app.listen(port, function () {
  console.log(`Server is runnning on Port:${port}`);
});
