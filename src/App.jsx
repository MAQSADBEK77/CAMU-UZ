import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ActaCamu from "./pages/ActaCamu";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Aloqa from "./pages/Aloqa";
import Bakalaviriat from "./pages/Bakalaviriat";
import Fotografiyalar from "./pages/Fotografiyalar";
import HalqaroBolim from "./pages/HalqaroBolim";
import Hodisalar from "./pages/Hodisalar";
import Maqolalar from "./pages/Maqolalar";
import Qabul from "./pages/Qabul";
import Rahbariyat from "./pages/Rahbariyat";
import SongiYangiliklar from "./pages/SongiYangiliklar";
import HomeLayout from "./pages/HomeLayout";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          element: <Home />,
          path: "/",
          index: true,
          errorElement: <Error />,
        },
        {
          element: <ActaCamu />,
          path: "actacamu",
          errorElement: <Error />,
        },
        {
          element: <Aloqa />,
          path: "aloqa",
          errorElement: <Error />,
        },
        {
          element: <Bakalaviriat />,
          path: "bakalaviriat",
          errorElement: <Error />,
        },
        {
          element: <Fotografiyalar />,
          path: "fotografiyalar",
          errorElement: <Error />,
        },
        {
          element: <HalqaroBolim />,
          path: "halqarobolim",
          errorElement: <Error />,
        },
        {
          element: <Hodisalar />,
          path: "hodisalar",
          errorElement: <Error />,
        },
        {
          element: <Maqolalar />,
          path: "maqolalar",
          errorElement: <Error />,
        },
        {
          element: <Qabul />,
          path: "qabul",
          errorElement: <Error />,
        },
        {
          element: <Rahbariyat />,
          path: "rahbariyat",
          errorElement: <Error />,
        },
        {
          element: <SongiYangiliklar />,
          path: "songiyangiliklar",
          errorElement: <Error />,
        },
        {
          element: <NotFound />,
          path: "*",
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
