import "../styles/Pokemon.scss";

function Pokemon({ pokemon }) {
  const pokemonName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="pokemon flex">
      <div className="pokemon--name flex">
        <h2>{pokemonName}</h2>
        <img
          src={pokemon.sprites.front_shiny}
          style={{ width: "150px", height: "auto" }}
        />
      </div>
      <div className="pokemon--info grid">
        <p className="bold">Index</p>
        <p>{pokemon.id}</p>
        <p className="bold">Type{pokemon.types.length > 1 && "s"}</p>
        <ul>
          {pokemon.types.map((obj) => {
            const type =
              obj.type.name.charAt(0).toUpperCase() + obj.type.name.slice(1);
            return <li key={obj.slot}>{type}</li>;
          })}
        </ul>
        <p className="bold">Height</p>
        <p>{pokemon.height * 10}cm</p>
      </div>
      <div className="buttons flex">
        <button>Delete</button>
        <button>Like</button>
      </div>
    </div>
  );
}

export default Pokemon;
