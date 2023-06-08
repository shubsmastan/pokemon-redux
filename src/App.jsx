import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Select from "./components/Select";
import Pokemon from "./components/Pokemon";
import Footer from "./components/Footer";
import { getData, setData, setFavourites } from "./store/pokemonSlice";
import "./styles/App.scss";

function App() {
  const { data, favourites, loading, error } = useSelector(
    (state) => state.pokemon
  );
  const { filter, search } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

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

  if (loading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
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
        <div
          style={{ fontSize: "2rem", textAlign: "center", padding: "40px 0" }}>
          All Pokemon deleted! Refresh the page for more.
        </div>
      </>
    );
  }

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
