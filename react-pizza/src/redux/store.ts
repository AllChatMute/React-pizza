import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import pizza from "./slices/pizzaSlice";
import search from "./slices/searchSlice";

//Создание хранилища со срезами
export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
    search,
  },
});
