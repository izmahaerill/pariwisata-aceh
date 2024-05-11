import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DestinasiWisata from "./pages/destinasi-wisata/index";
import Home from "./pages/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/destinasi-wisata",
      element: <DestinasiWisata />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
