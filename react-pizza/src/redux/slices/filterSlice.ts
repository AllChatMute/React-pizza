import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  categoryId: number;
  currentPage: number;
  sort: {
    name: string;
    sortProperty: string;
  };
}

const initialState: initialState = {
  categoryId: 0,
  currentPage: 0,
  sort: {
    name: "не сортировать",
    sortProperty: "none",
  },
};

const filterSlice = createSlice({
  //Имя среза
  name: "filter",
  //Начальные значения
  initialState,
  //Функции управления состоянием
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

//Экспорт функций
export const { setCategoryId, setSortType, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
