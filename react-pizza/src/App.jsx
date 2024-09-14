import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import "./scss/app.scss";

import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Cart from "./pages/cart";
import FullPizza from "./pages/fullPizza";
import MainLayout from "./layouts/mainLayout";

export const SearchContext = createContext();

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SearchContext.Provider>
    </>
  );
};

export default App;
