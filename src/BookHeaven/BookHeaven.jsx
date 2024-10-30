import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ExploreBooks from "./pages/ExploreBooks";
import Cart from "./pages/Cart";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <ExploreBooks />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function BookHeaven() {
  return <RouterProvider router={router} />;
}

export default BookHeaven;
