import pizzaItem from "./pizzaItem.interface";
export default interface state {
  cart: {
    items: object[];
    totalPrice: number;
  };
  filter: {
    categoryId: number;
    currentPage: number;
    sort: {
      name: string;
      sortProperty: string;
    };
  };
  pizza: {
    items: pizzaItem[];
  };
  search: {
    searchValue: string;
  };
}
