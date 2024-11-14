import ProductItem from "./product-item";
import { useShoppingCartContext } from "./shopping-cart.context";

export default function ProductList() {
  const { products } = useShoppingCartContext();

  return (
    <div className="flex gap-4">
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}
