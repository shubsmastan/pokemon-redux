import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    filter: filterReducer,
  },
});
