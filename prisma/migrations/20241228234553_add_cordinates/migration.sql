-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "sprite" TEXT NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PokemonPosition" (
    "id" SERIAL NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "topLeftX" INTEGER NOT NULL,
    "topLeftY" INTEGER NOT NULL,
    "topRightX" INTEGER NOT NULL,
    "topRightY" INTEGER NOT NULL,
    "bottomLeftX" INTEGER NOT NULL,
    "bottomLeftY" INTEGER NOT NULL,
    "bottomRightX" INTEGER NOT NULL,
    "bottomRightY" INTEGER NOT NULL,

    CONSTRAINT "PokemonPosition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PokemonPosition" ADD CONSTRAINT "PokemonPosition_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
