import { useShoppingCartContext } from "./shopping-cart.context";

export default function ProductDetails() {
  const { selectedProduct } = useShoppingCartContext();

  if (!selectedProduct) return null;

  return (
    <div>
      <h1>Selected product</h1>
      <h3>{selectedProduct.name}</h3>
    </div>
  );
}
