import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import PrivateRoute from "./routers/PrivateRoute";
import { Suspense } from "react";

// import Profile from "./1-components/profile";
// import ReactQuery from "./14-react-query/react-query";
// import Redux from "./13-redux/redux";
// import Products from "./15-router/Products";
// import ProductDetails from "./15-router/ProductDetails";

// Home: bsc.com/
// PriceBoard: bsc.com/priceboard

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>...Loading</h1>}>
        <RootLayout />
      </Suspense>
    ),
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
        async lazy() {
          const Products = (await import("./15-router/Products.tsx")).default;
          return { Component: Products };
        },
      },
      {
        path: "/products/:productId",
        async lazy() {
          const ProductDetails = (
            await import("./15-router/ProductDetails.tsx")
          ).default;
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
              const ReactQuery = (
                await import("./14-react-query/react-query.tsx")
              ).default;
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
]);

export default router;
