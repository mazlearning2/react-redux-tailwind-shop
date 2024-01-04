import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  CheckOut,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "../../pages";

import { ErrorElement } from "../../components";

// loaders
import { loader as landingLoader } from "../../pages/Landing";
import { loader as singleProductLoader } from "../../pages/SingleProduct";
import { loader as productsLoader } from "../../pages/Products";
import { loader as checkoutLoader } from "../../pages/CheckOut";
import { loader as ordersLoader } from "../../pages/Orders";
// actions
import { action as registerAction } from "../../pages/Register";
import { action as loginAction } from "../../pages/Login";
import { action as checkoutAction } from "../../components/CheckoutForm";
import { store } from "../../store";
import { QueryClient } from "react-query";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 60 *5
//     }
//   }
// })

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: "orders",
        element: <Orders />,
        loader: ordersLoader(store),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;