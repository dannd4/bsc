// /products
// /produts/iphone-14
// /products/samsung-s24

import { useNavigate, useSearchParams } from "react-router";
import data from "./data.json";

export default function Products() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  const products = data.filter((item) => item.name.toLowerCase().includes(searchParams.get("name") || ""));

  return (
    <>
      <div className="flex gap-4">
        {products.map((product) => (
          <div key={product.id} className="w-[300px] text-black bg-white rounded-md">
            <h1 className="text-xl">{product.name}</h1>
            <p>{product.price}</p>
            <button className="btn" onClick={() => navigate(`${product.id}`)}>
              Details
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          setSearchParams((prev) => {
            prev.set("name", "samsung");
            return prev;
          })
        }
      >
        Set Filter
      </button>
    </>
  );
}
