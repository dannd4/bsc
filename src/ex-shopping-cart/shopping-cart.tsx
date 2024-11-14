import Carts from "./carts";
import ProductDetails from "./product-details";
import ProductList from "./product-list";
import { ShoppingCartProvider } from "./shopping-cart.context";


export default function ShoppingCart() {
  return (
    <ShoppingCartProvider>
      <div className="flex flex-col items-center mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Shopping Carts</h1>
        <ProductList />
        <ProductDetails />
        <Carts />
      </div>
    </ShoppingCartProvider>
  );
}
