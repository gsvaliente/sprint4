const getPokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await data.json();
    if (!pokemon) {
      res
        .status(404)
        .json({ success: false, msg: `pokemon number ${id} not found` });
    }
    res.status(200).json({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};
module.exports = getPokemon;
