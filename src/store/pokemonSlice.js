import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: localStorage.getItem("pokemon")
      ? JSON.parse(localStorage.getItem("pokemon"))
      : [],
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
