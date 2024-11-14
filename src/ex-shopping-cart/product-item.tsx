import { Product, useShoppingCartContext } from "./shopping-cart.context";

type Props = {
  product: Product;
};

export default function ProductItem({ product }: Props) {
  const { handleSelectProduct, handleAddProductToCart } = useShoppingCartContext();

  return (
    <div className="w-[300px] text-black bg-white rounded-md">
      <h1 className="text-xl">{product.name}</h1>
      <p>{product.price}</p>
      <div className="flex gap-4">
        <button className="p-2 text-white bg-black" onClick={() => handleSelectProduct(product)}>
          Details
        </button>
        <button className="p-2 text-white bg-black" onClick={() => handleAddProductToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
