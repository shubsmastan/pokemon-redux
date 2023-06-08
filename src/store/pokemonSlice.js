import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
  "pokemon/getPokemon",
  async (_, thunkAPI) => {
    let arr = [];
    while (arr.length < 10) {
      const num = Math.floor(Math.random() * 151) + 1;
      if (!arr.includes(num)) arr.push(num);
    }
    try {
      let pokedex = [];
      for (let i = 0; i < arr.length; i++) {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${arr[i]}`
        );
        pokedex = pokedex.concat(data);
      }
      return pokedex;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        `Error getting Pokemon data. ${err.message}.`
      );
    }
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    favourites: [],
    loading: true,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFavourites: (state, action) => {
      state.favourites = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setData, setFavourites } = pokemonSlice.actions;

export default pokemonSlice.reducer;
