import { QueryClient, queryOptions } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router";
import { fetchProductById, fetchProducts } from "../apis/products";

export const productsQuery = ({
  page,
  limit,
}: {
  page?: number;
  limit?: number;
}) =>
  queryOptions({
    queryKey: ["products", { page, limit }],
    queryFn: async () => {
      return fetchProducts({ page, limit });
    },
  });

export const productsLoader =
  (queryClient: QueryClient) =>
  ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const limit = url.searchParams.get("limit");
    const query = productsQuery({
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    });
    return queryClient.ensureQueryData(query);
  };

export const productDetailsQuery = (id: number) =>
  queryOptions({
    queryKey: ["products", id],
    queryFn: () => fetchProductById(id),
  });

export const productDetailsLoader =
  (queryClient: QueryClient) =>
  ({ params }: LoaderFunctionArgs) => {
    const query = productDetailsQuery(Number(params.productId));
    return queryClient.ensureQueryData(query);
  };
