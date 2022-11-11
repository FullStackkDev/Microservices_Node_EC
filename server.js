const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "NodeJS API is running" });
});

app.listen(PORT, console.log(`server running on port ${PORT}`));

module.exports = app;
