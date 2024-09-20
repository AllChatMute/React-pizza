import { createSlice } from "@reduxjs/toolkit";
import cartItem from "../../@types/interfaces/cartItem.interface";

interface initialState {
  totalPrice: number;
  items: object[];
}

// type pizzaItemWithCount = pizzaItem &

const initialState: initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        (obj: { id: string }) => obj.id === action.payload.id
      ) as cartItem;

      if (findItem) {
        findItem.count++;
      } else {
        const itemToAdd: cartItem = { ...action.payload, count: 1 };
        state.items.push(itemToAdd);
      }

      state.totalPrice = state.items.reduce(
        (sum, obj: cartItem) => obj.price * obj.count + sum,
        0
      );
    },
    removeItem(state, action) {
      const filteredItems = state.items.filter(
        (obj: cartItem) => obj.id !== action.payload
      );
      state.items = filteredItems;

      state.totalPrice = state.items.reduce(
        (sum, obj: cartItem) => obj.price * obj.count + sum,
        0
      );
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    increaseItemCount(state, action) {
      const findItem = state.items.find(
        (obj: cartItem) => obj.id === action.payload
      ) as cartItem;

      if (findItem) {
        findItem.count++;
      }

      state.totalPrice = state.items.reduce(
        (sum, obj: cartItem) => obj.price * obj.count + sum,
        0
      );
    },
    decreaseItemCount(state, action) {
      const findItem = state.items.find(
        (obj: cartItem) => obj.id === action.payload
      ) as cartItem;

      if (findItem && findItem.count > 1) {
        findItem.count--;
      }

      state.totalPrice = state.items.reduce(
        (sum, obj: cartItem) => obj.price * obj.count + sum,
        0
      );
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItems,
  increaseItemCount,
  decreaseItemCount,
} = cartSlice.actions;

export default cartSlice.reducer;
