import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export type Pokemon = {
  name: string;
  id: number;
  height: number;
  types: { slot: number; type: { name: string } }[];
  sprites: {
    versions: {
      "generation-vi": {
        "omegaruby-alphasapphire": { front_default: string };
      };
    };
  };
};

type PokemonState = {
  data: Array<Pokemon> | undefined;
  favourites: number[];
  loading: boolean;
  error: unknown;
};

const initialState: PokemonState = {
  data: [],
  favourites: [],
  loading: true,
  error: null,
};

export const getData = createAsyncThunk(
  "pokemon/getPokemon",
  async (_, thunkAPI) => {
    const arr: number[] = [];
    while (arr.length < 10) {
      const num = Math.floor(Math.random() * 151) + 1;
      if (!arr.includes(num)) arr.push(num);
    }
    try {
      let pokedex: object[] = [];
      for (let i = 0; i < arr.length; i++) {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${arr[i]}`
        );
        pokedex = pokedex.concat(data);
      }
      return pokedex;
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        return thunkAPI.rejectWithValue(
          `Error getting Pokemon data. ${err.message}.`
        );
      }
      console.log(err);
    }
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
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
        state.data = payload as Pokemon[];
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setData, setFavourites } = pokemonSlice.actions;

export default pokemonSlice.reducer;
