import "./scss/app.scss";
import Header from "./components/header";
import Categories from "./components/categories";
import Sort from "./components/sort";
import PizzaBlock from "./components/pizzaBlock";

import { useState, useEffect } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  //https://66cf3d37901aab24842179de.mockapi.io/Items

  useEffect(() => {
    fetch("https://66cf3d37901aab24842179de.mockapi.io/Items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {items.map((pizza) => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
