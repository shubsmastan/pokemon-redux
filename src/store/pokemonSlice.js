import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    favourites: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFavourites: (state, action) => {
      state.favourites = action.payload;
    },
  },
});

export const { setData, setFavourites } = pokemonSlice.actions;

export default pokemonSlice.reducer;
