import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";

//Создание хранилища со срезами
export const store = configureStore({
  reducer: {
    filter,
  },
});
