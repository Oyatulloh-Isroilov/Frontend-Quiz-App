import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import { loader as homeLoader } from "./components/Header";
import Quiz from "./components/Quiz";
import Error from "./pages/Error";
import FinishedScreen from "./pages/FinishedScreen";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "/:type",
          element: <Quiz />,
          errorElement: <Error />,
        },
        {
          path: "/finished",
          element: <FinishedScreen />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
