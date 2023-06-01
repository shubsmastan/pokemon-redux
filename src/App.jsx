import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Select from "./components/Select";
import Pokemon from "./components/Pokemon";
import Footer from "./components/Footer";
import { setData, setFavourites } from "./store/pokemonSlice";
import "./styles/App.scss";

function App() {
  const [error, setError] = useState();
  const [deleted, setDeleted] = useState(false);

  const { data, favourites } = useSelector((state) => state.pokemon);
  const { filter, search } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let arr = [];
    while (arr.length < 10) {
      const num = Math.floor(Math.random() * 151) + 1;
      if (!arr.includes(num)) arr.push(num);
    }
    try {
      let pokedex = [];
      for (let i = 0; i < arr.length; i++) {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${arr[i]}`
        );
        pokedex = pokedex.concat(data);
      }
      localStorage.setItem("pokemon", JSON.stringify(pokedex));
      dispatch(setData(pokedex));
    } catch (err) {
      setError(`Error fetching Pokemon data. ${err.message}.`);
    }
  };

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      dispatch(setFavourites(favourites.filter((fave) => fave !== id)));
      return;
    }
    dispatch(setFavourites([...favourites, id]));
  };

  const handleDelete = (id) => {
    dispatch(setData(data.filter((pokemon) => pokemon.id !== id)));
    setDeleted(true);
  };

  let filteredPokemon = [...data];

  if (search) {
    filteredPokemon = filteredPokemon.filter((pokemon) => {
      if (pokemon.name.includes(search.toLowerCase())) {
        return true;
      }
    });
  }

  switch (filter) {
    case "favourites":
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        favourites.includes(pokemon.id)
      );
      break;
    case "ascending":
      filteredPokemon = filteredPokemon.sort((pokemon1, pokemon2) => {
        return pokemon1.name.localeCompare(pokemon2.name);
      });
      break;
    case "descending":
      filteredPokemon = filteredPokemon.sort((pokemon1, pokemon2) => {
        return -1 * pokemon1.name.localeCompare(pokemon2.name);
      });
      break;
    default:
      break;
  }

  if (error) {
    return (
      <>
        <Header />
        <div
          style={{
            fontSize: "2rem",
            textAlign: "center",
            padding: "40px 0",
            marginInline: "auto",
            width: "400px",
          }}>
          {error}
        </div>
      </>
    );
  }

  if (data.length === 0) {
    return (
      <>
        <Header />
        <Loading deleted={deleted} />
      </>
    );
  }

  return (
    <>
      <Header />
      <Select />
      <div className="pokemon-all">
        {filteredPokemon.map((pokemon, index) => {
          return (
            <Pokemon
              key={pokemon.id}
              index={index}
              pokemon={pokemon}
              handleDelete={handleDelete}
              toggleFavourite={toggleFavourite}
              liked={favourites.includes(pokemon.id)}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
