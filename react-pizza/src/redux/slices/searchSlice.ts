import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  searchValue: string;
}

const initialState: initialState = {
  searchValue: "",
};

const pizzaSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = pizzaSlice.actions;

export default pizzaSlice.reducer;
