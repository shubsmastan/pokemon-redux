import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import "../styles/Pokemon.scss";
import { Pokemon as PokemonType } from "../store/pokemonSlice";

type PokemonComponentProps = {
  pokemon: PokemonType;
  index: number;
  liked: boolean;
  toggleFavourite: (id: number) => void;
  handleDelete: (id: number) => void;
};

function Pokemon({
  pokemon,
  index,
  liked,
  toggleFavourite,
  handleDelete,
}: PokemonComponentProps) {
  const pokemonName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className={index % 2 === 0 ? "pokemon flex" : "pokemon flex reverse"}>
      <div className="pokemon--name flex">
        <h2>{pokemonName}</h2>
        <img
          className={index % 2 === 0 ? "reflect" : ""}
          src={
            pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
              .front_default
          }
          style={{ width: "150px", height: "auto" }}
        />
      </div>
      <div className="pokemon--info">
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
        <button
          onClick={() => {
            handleDelete(pokemon.id);
          }}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button
          onClick={() => {
            toggleFavourite(pokemon.id);
          }}>
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
