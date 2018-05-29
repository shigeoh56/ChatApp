const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hey there!").end();
});

app.listen(3001, "Server is listening on 3001");
