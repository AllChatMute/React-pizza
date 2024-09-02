import Categories from "../components/categories";
import Sort from "../components/sort";
import PizzaBlock from "../components/pizzaBlock/pizzaBlock";
import Skeleton from "../components/pizzaBlock/skeleton";
import Pagination from "../components/pagination/pagination";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../App";
import { setCategoryId } from "../redux/slices/filterSlice";

const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [orderType, setOrderType] = useState("asc");
  const { searchValue } = useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}&` : ``;
    const sort = sortType.sortProperty;
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://66cf3d37901aab24842179de.mockapi.io/Items?page=${
        page + 1
      }&limit=4&${category}sortBy=${sort}&order=${orderType}${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        data === "Not found" ? setItems([]) : setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, orderType, searchValue, page]);

  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);
  const skeletons = [1, 2, 3, 4, 5, 6].map((item) => <Skeleton key={item} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort
            onChangeOrderType={(orderType) => setOrderType(orderType)}
            orderType={orderType}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination setPage={(index) => setPage(index)} />
      </div>
    </>
  );
};

export default Home;
