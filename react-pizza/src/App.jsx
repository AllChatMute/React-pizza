import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import "./scss/app.scss";
import Header from "./components/header";

import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Cart from "./pages/cart";

export const SearchContext = createContext();

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </>
  );
};

export default App;
