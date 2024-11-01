import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ExploreBooks from "./pages/ExploreBooks";
import Cart from "./pages/Cart";
import Layout from "./Layout";
import { BookProvider } from "./Context/BookConext";

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
  return (
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  );
}

export default BookHeaven;
