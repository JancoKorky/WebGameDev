const express = require("express");
const bodyParser = require("body-parser");

const db = require("./util/database");
const app = express();
const port = 3000;

const testRoutes = require("./routes/test");

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//load public file with sketch
app.use(express.static("public"));

app.use("/test", testRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
