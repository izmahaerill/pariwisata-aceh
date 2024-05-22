import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DestinasiWisata from "./pages/destinasi-wisata/index";
import Home from "./pages/index";
import Festival from "./pages/festival/index";
import Bookmark from "./pages/bookmark";
import Berita from "./pages/berita";
import Login from "./pages/login";
import Register from "./pages/register";
import DetailBerita from "./pages/berita/detailBerita.jsx";
import DetailDestinasiWisata from "./pages/destinasi-wisata/detailDestinasiWisata";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/destinasi-wisata/",
      element: <DestinasiWisata />,
    },
    {
      path: "/destinasi-wisata/:id",
      element: <DetailDestinasiWisata />,
    },
    {
      path: "/festival",
      element: <Festival />,
    },
    {
      path: "/bookmark",
      element: <Bookmark />,
    },
    {
      path: "/berita/:id",
      element: <DetailBerita />,
    },
    {
      path: "/berita",
      element: <Berita />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

// ANOTHER WAYS FOR SET ROUTES

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import DestinasiWisata from "./pages/destinasi-wisata";
// import Home from "./pages/";
// import Festival from "./pages/festival";
// import Boomark from "./pages/bookmark";
// import Berita from "./pages/berita";
// import Auth from "./pages/auth";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/destinasi-wisata" element={<DestinasiWisata />} />
//         <Route path="/festival" element={<Festival />} />
//         <Route path="/bookmark" element={<Boomark />} />
//         <Route path="/berita/:id" element={<Berita />} />
//         <Route path="/auth" element={<Auth />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
