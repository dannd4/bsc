import axios from "axios";

const http = axios.create({
  baseURL: "https://api.freeapi.app",
});

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
}

interface ProductsResponse {
  data: {
    page: number;
    limit: number;
    totalPages: number;
    data: Product[];
  };
}

export const fetchProducts = async ({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}) => {
  const response = await http.get<ProductsResponse>(
    `/api/v1/public/randomproducts`,
    {
      params: {
        page,
        limit,
      },
    }
  );
  return response.data.data;
};

interface ProductResponse {
  data: Product;
}

export const fetchProductById = async (id: number) => {
  const response = await http.get<ProductResponse>(
    `/api/v1/public/randomproducts/${id}`
  );
  return response.data.data;
};
