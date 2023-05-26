import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import favouritesReducer from "./favouritesReducer";
import fitlerReducer from "./filterReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  favourites: favouritesReducer,
  filter: fitlerReducer,
  search: searchReducer,
});

export default rootReducer;
