import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams, useLoaderData } from "react-router";
import { productsQuery } from "./loader";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // const data = useLoaderData()
  const { data, isPending, error } = useQuery(
    productsQuery({
      page: searchParams.get("page")
        ? Number(searchParams.get("page"))
        : undefined,
      limit: searchParams.get("limit")
        ? Number(searchParams.get("limit"))
        : undefined,
    })
  );

  const navigate = useNavigate();

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  const products = data.data.filter((item) =>
    item.title.toLowerCase().includes(searchParams.get("name") || "")
  );

  return (
    <>
      <div className="flex gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[300px] text-black bg-white rounded-md"
          >
            <h1 className="text-xl">{product.title}</h1>
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
