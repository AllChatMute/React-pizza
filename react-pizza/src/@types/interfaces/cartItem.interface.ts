import pizzaItem from "./pizzaItem.interface";

export default interface cartItem extends pizzaItem {
  count: number;
}
