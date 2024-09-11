import { ShoppingCart } from "./shopping-cart/shopping-cart.service";

function main() {
  const shoppingCart = new ShoppingCart();

  shoppingCart.addItem({ name: "Apple", price: 0.5 });
  shoppingCart.addItem({ name: "Orange", price: 0.75 });

  console.log(shoppingCart.getTotalCost());
}

main();
