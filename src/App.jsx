import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Select from "./components/Select";
import Pokemon from "./components/Pokemon";
import Footer from "./components/Footer";
import "./styles/App.scss";

function App() {
  const [pokemon, setPokemon] = useState(
    localStorage.getItem("pokemon")
      ? JSON.parse(localStorage.getItem("pokemon"))
      : []
  );

  const [favourites, setFavourites] = useState([]);

  const [filter, setFilter] = useState("all");

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     let pokedex = [];
  //     for (let i = 0; i < 10; i++) {
  //       const num = ;
  //         `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`
  //       );
  //       pokedex = pokedex.concat(data);
  //     }
  //     localStorage.setItem("pokemon", JSON.stringify(pokedex));
  //     setPokemon(pokedex);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((fave) => fave !== id));
      return;
    }
    setFavourites([...favourites, id]);
  };

  const handleDelete = (id) => {
    setPokemon(pokemon.filter((mon) => mon.id !== id));
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
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

  console.log(filteredPokemon);

  if (!pokemon.length === 0) {
    return <Loading />;
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
