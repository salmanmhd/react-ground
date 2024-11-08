import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import Completed from "./pages/Completed";
import Incomplete from "./pages/Incomplete";
import AllTodo from "./pages/AllTodo";
function Main() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/addtodo",
          element: <AddTodo />,
        },
        {
          path: "/alltodos",
          element: <AllTodo />,
        },
        {
          path: "/completed",
          element: <Completed />,
        },
        {
          path: "/incomplete",
          element: <Incomplete />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Main;
