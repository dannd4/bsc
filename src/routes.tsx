import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import PrivateRoute from "./routers/PrivateRoute";
import { productDetailsLoader, productsLoader } from "./15-router/loader.ts";
import { queryClient } from "./queryClient.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        async lazy() {
          const Profile = (await import("./1-components/profile.tsx")).default;
          return { Component: Profile };
        },
      },

      {
        path: "/products",
        loader: productsLoader(queryClient),
        async lazy() {
          const Products = (await import("./15-router/Products.tsx")).default;
          return { Component: Products };
        },
      },
      {
        path: "/products/:productId",
        loader: productDetailsLoader(queryClient),
        async lazy() {
          const ProductDetails = (await import("./15-router/ProductDetails.tsx")).default;
          return { Component: ProductDetails };
        },
      },

      {
        path: "/",
        element: <PrivateRoute />,
        children: [
          {
            path: "/react-query",
            async lazy() {
              const ReactQuery = (await import("./14-react-query/react-query.tsx")).default;
              return { Component: ReactQuery };
            },
          },
          {
            path: "/redux",
            async lazy() {
              const Redux = (await import("./13-redux/redux.tsx")).default;
              return { Component: Redux };
            },
          },
        ],
      },
    ],
  },

  {
    path: "/styles",
    async lazy() {
      const Styles = (await import("./16-styles/styles.tsx")).default;
      return { Component: Styles };
    },
  },
]);

export default router;
