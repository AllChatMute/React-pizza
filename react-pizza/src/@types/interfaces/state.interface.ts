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
      sortType: string;
    };
  };
}
