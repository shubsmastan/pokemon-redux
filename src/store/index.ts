import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";
import filterReducer from "./filterSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
