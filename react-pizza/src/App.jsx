import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./scss/app.scss";
import Header from "./components/header";

import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Cart from "./pages/cart";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  return (
    <>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
