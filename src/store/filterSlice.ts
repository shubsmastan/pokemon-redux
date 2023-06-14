import { createSlice } from "@reduxjs/toolkit";

export type FilterState = {
  filter: string;
  search: string;
  error: string | null;
};

const initialState: FilterState = { filter: "all", search: "", error: null };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setFilter, setSearch, setError } = filterSlice.actions;

export default filterSlice.reducer;
