const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

let pokemons;
const loadPokemons = async () => {
  pokemons = await prisma.pokemon.findMany({
    include: {
      PokemonPosition: true,
    },
  });
};
loadPokemons();

const validationController = async (req, res) => {
  const { position, pkIdSelected } = req.body;

  let isCorrect = false;

  for (const pokemon of pokemons) {
    const {
      topLeftX,
      topRightX,
      bottomLeftX,
      bottomRightX,
      topLeftY,
      topRightY,
      bottomLeftY,
      bottomRightY,
    } = pokemon.PokemonPosition[0];

    const minX = Math.min(topLeftX, bottomLeftX);
    const maxX = Math.max(topRightX, bottomRightX);
    const minY = Math.min(topLeftY, topRightY);
    const maxY = Math.max(bottomLeftY, bottomRightY);

    if (
      position.x >= minX &&
      position.x <= maxX &&
      position.y >= minY &&
      position.y <= maxY
    ) {
      if (pokemon.id === parseInt(pkIdSelected)) {
        isCorrect = true;
        break;
      } else {
      }
    } else {
    }
  }

  res.json({ isCorrect });
};

module.exports = { validationController };
