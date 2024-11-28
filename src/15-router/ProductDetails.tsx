import { skipToken, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import data from "./data.json";

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();

  const {
    data: product,
    isPending,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: productId
      ? () => {
          return new Promise<(typeof data)[number]>((resolve, reject) => {
            const product = data.find((item) => item.id === Number(productId));
            resolve(product!);
          });
        }
      : skipToken,
    enabled: !!productId,
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="w-[300px] text-black bg-white rounded-md">
      <h1 className="text-xl">{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
}
