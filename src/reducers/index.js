import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import favouritesReducer from "./favouritesReducer";
import fitlerReducer from "./filterReducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  favourites: favouritesReducer,
  filter: fitlerReducer,
});

export default rootReducer;
