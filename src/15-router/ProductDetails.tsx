import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { productDetailsQuery } from "./loader";

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();

  const { data: product, isPending, error } = useQuery(
    productDetailsQuery(Number(productId))
  );

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="w-[300px] text-black bg-white rounded-md">
      <h1 className="text-xl">{product.title}</h1>
      <p>{product.price}</p>
    </div>
  );
}
