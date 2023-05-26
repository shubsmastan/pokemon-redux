import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Select from "./components/Select";
import Pokemon from "./components/Pokemon";
import Footer from "./components/Footer";
import uniqueRandom from "unique-random";
import "./styles/App.scss";

function App() {
  const pokemon = useSelector((state) => state.pokemon);
  const favourites = useSelector((state) => state.favourites);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     let pokedex = [];
  //     let random = uniqueRandom(1, 151);
  //     for (let i = 0; i < 10; i++) {
  //       const { data } = await axios.get(
  //         `https://pokeapi.co/api/v2/pokemon/${random()}`
  //       );
  //       pokedex = pokedex.concat(data);
  //     }
  //     localStorage.setItem("pokemon", JSON.stringify(pokedex));
  //     dispatch({ type: "SET_POKEMON", payload: pokedex });
  //   } catch (err) {
  //     console.log("Error fetching Pokemon data:", err);
  //   }
  // };

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      dispatch({
        type: "SET_FAVOURITES",
        payload: favourites.filter((fave) => fave !== id),
      });
      return;
    }
    dispatch({ type: "SET_FAVOURITES", payload: [...favourites, id] });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "SET_POKEMON",
      payload: pokemon.filter((mon) => mon.id !== id),
    });
  };

  const changeFilter = (e) => {
    dispatch({
      type: "SET_FILTER",
      payload: e.target.value,
    });
  };

  let filteredPokemon = [...pokemon];

  switch (filter) {
    case "favourites":
      filteredPokemon = filteredPokemon.filter((mon) =>
        favourites.includes(mon.id)
      );
      break;
    case "ascending":
      filteredPokemon = filteredPokemon.sort((mon1, mon2) => {
        return mon1.name.localeCompare(mon2.name);
      });
      break;
    case "descending":
      filteredPokemon = filteredPokemon.sort((mon1, mon2) => {
        return -1 * mon1.name.localeCompare(mon2.name);
      });
      break;
    default:
      break;
  }

  if (pokemon.length === 0) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  return (
    <>
      <Header />
      <Select selected={filter} changeFilter={changeFilter} />
      <div className="pokemon-all">
        {filteredPokemon.map((pokemon) => {
          return (
            <Pokemon
              key={pokemon.id}
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
