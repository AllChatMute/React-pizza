import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import Header from "./components/header";

import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Cart from "./pages/cart";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
