import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Pokemon from "./components/Pokemon";
import Footer from "./components/Footer";
import "./styles/App.scss";

function App() {
  const [pokemon, setPokemon] = useState(
    localStorage.getItem("pokemon")
      ? JSON.parse(localStorage.getItem("pokemon"))
      : []
  );

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     let pokedex = [];
  //     for (let i = 0; i < 10; i++) {
  //       const num = Math.floor(Math.random() * 150);
  //       const { data } = await axios.get(
  //         `https://pokeapi.co/api/v2/pokemon/${num}`
  //       );
  //       pokedex = pokedex.concat(data);
  //     }
  //     localStorage.setItem("pokemon", JSON.stringify(pokedex));
  //     setPokemon(pokedex);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  console.log(pokemon);

  if (!pokemon.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className="pokemon-all">
        {pokemon.map((pokemon) => {
          return (
            <Pokemon
              key={pokemon.id}
              pokemon={pokemon}
              handleDelete={() => {}}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
