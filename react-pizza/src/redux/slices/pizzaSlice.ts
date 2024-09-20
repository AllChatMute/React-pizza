import { createSlice } from "@reduxjs/toolkit";
import pizzaItem from "../../@types/interfaces/pizzaItem.interface";

interface initialState {
  items: pizzaItem[];
}

const initialState: initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
