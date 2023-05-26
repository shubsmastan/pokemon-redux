import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import "../styles/Pokemon.scss";

function Pokemon({ pokemon, liked, toggleFavourite, handleDelete }) {
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
      <div className="pokemon--info flex">
        <div className="flex">
          <p className="bold">Index</p>
          <p className="bold">Type{pokemon.types.length > 1 && "s"}</p>
          <p className="bold">Height</p>
        </div>
        <div className="flex">
          <p>{pokemon.id}</p>
          <ul>
            {pokemon.types.map((obj) => {
              const type =
                obj.type.name.charAt(0).toUpperCase() + obj.type.name.slice(1);
              return <li key={obj.slot}>{type}</li>;
            })}
          </ul>
          <p>{pokemon.height * 10}cm</p>
        </div>
      </div>
      <div className="buttons flex">
        <button
          onClick={() => {
            handleDelete(pokemon.id);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button
          onClick={() => {
            toggleFavourite(pokemon.id);
          }}
        >
          {liked ? (
            <FontAwesomeIcon icon={faHeart} />
          ) : (
            <FontAwesomeIcon icon={faHeartEmpty} />
          )}
        </button>
      </div>
    </div>
  );
}

export default Pokemon;
