import { SUCCESSFULLY_ADDED_TO_CART } from "./constants";
import { CartItem } from "./cart-item.interfaces";

export class ShoppingCart {
  private storage: Array<CartItem>;

  constructor(storage?: Array<CartItem>) {
    this.storage = storage || [];
  }

  public addItem(item: CartItem): string {
    this.storage.push(item);
    return SUCCESSFULLY_ADDED_TO_CART;
  }

  public getTotalCost(): number {
    return this.storage.reduce((acc, item) => acc + item.price, 0);
  }
}
