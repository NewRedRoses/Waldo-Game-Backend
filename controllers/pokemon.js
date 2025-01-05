const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPokemons = async (req, res) => {
  let pokemons = [];
  const max = await prisma.pokemon.count();

  for (let x = 0; x < 3; x++) {
    let randomPkId = getRandomInt(1, max);

    let isPkInArr = pokemons.some((pokemon) => pokemon.id === randomPkId);
    if (isPkInArr) {
      x--;
    } else {
      const pkToAdd = await prisma.pokemon.findUnique({
        where: {
          id: randomPkId,
        },
      });
      pokemons.push(pkToAdd);
    }
  }

  res.send(pokemons);
};

// Helper functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
module.exports = { getPokemons };
