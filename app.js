const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Route should be protected
app.post("/", (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(PORT, () => {
  console.log("Running on port: ", PORT);
});
