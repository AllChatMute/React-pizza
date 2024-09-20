import * as React from "react";
import Categories from "../components/categories";
import Sort from "../components/sort";
import PizzaBlock from "../components/pizzaBlock/pizzaBlock";
import Skeleton from "../components/pizzaBlock/skeleton";
import Pagination from "../components/pagination/pagination";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import { setItems } from "../redux/slices/pizzaSlice";
import axios from "axios";
import state from "../@types/interfaces/state.interface";

const Home = () => {
  const categoryId = useSelector((state: state) => state.filter.categoryId);
  const sortType = useSelector((state: state) => state.filter.sort);
  const currentPage = useSelector((state: state) => state.filter.currentPage);
  const items = useSelector((state: state) => state.pizza.items);

  const dispatch = useDispatch();

  // const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(0);

  const [orderType, setOrderType] = useState("asc");
  // const { searchValue } = useContext(SearchContext);
  const searchValue = useSelector((state: state) => state.search.searchValue);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    const getPizzas = async () => {
      try {
        setIsLoading(true);
        const category = categoryId > 0 ? `category=${categoryId}&` : ``;
        const sort = sortType.sortProperty;
        const search = searchValue ? `&search=${searchValue}` : "";

        const response = await axios.get(
          `https://66cf3d37901aab24842179de.mockapi.io/Items?page=${
            currentPage + 1
          }&limit=4&${category}sortBy=${sort}&order=${orderType}${search}`
        );

        const data = await response.data;
        data === "Not found"
          ? dispatch(setItems([]))
          : dispatch(setItems(data));
        window.scrollTo(0, 0);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPizzas();
  }, [categoryId, sortType, orderType, searchValue, currentPage, dispatch]);
  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);
  const skeletons = [1, 2, 3, 4, 5, 6].map((item) => <Skeleton key={item} />);

  const handleChangePage = (index) => {
    dispatch(setCurrentPage(index));
  };
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort
            onChangeOrderType={(orderType: string) => setOrderType(orderType)}
            orderType={orderType}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination setCurrentPage={handleChangePage} />
      </div>
    </>
  );
};

export default Home;
