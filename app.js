const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

const { validationController } = require("./controllers/gameLogic.js");

const { getPokemons } = require("./controllers/pokemon.js");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.options("*", cors());

// Route should be protected
app.post("/validate", validationController);

app.get("/pokemons", getPokemons);
app.listen(PORT, () => {
  console.log("Running on port: ", PORT);
});
