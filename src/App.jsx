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
import AdminDestinasi from "./pages/admin/destinasi-wisata/index.jsx";
import AdminBerita from "./pages/admin/berita/index.jsx";
import AdminFestival from "./pages/admin/festival/index.jsx";
import TambahDestinasi from "./pages/admin/destinasi-wisata/tambah-destinasi.jsx";
import TambahBerita from "./pages/admin/berita/tambah-berita.jsx";
import TambahFestival from "./pages/admin/festival/tambah-festival.jsx";
import EditDestinasi from "./pages/admin/destinasi-wisata/edit-destinasi.jsx";
import EditBerita from "./pages/admin/berita/edit-berita.jsx";
import EditFestival from "./pages/admin/festival/edit-festival.jsx";
import LoginAdmin from "./pages/admin/login/index.jsx";

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
      path: "/admin/login",
      element: <LoginAdmin />,
    },

    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/admin/destinasi-wisata",
      element: <AdminDestinasi />,
    },
    {
      path: "/admin/destinasi-wisata/:id",
      element: <AdminDestinasi />,
    },
    {
      path: "/admin/destinasi-wisata/tambah-destinasi",
      element: <TambahDestinasi />,
    },
    {
      path: "/admin/destinasi-wisata/edit-destinasi/:id",
      element: <EditDestinasi />,
    },
    {
      path: "/admin/berita",
      element: <AdminBerita />,
    },
    {
      path: "/admin/berita/:id",
      element: <AdminBerita />,
    },
    {
      path: "/admin/berita/tambah-berita",
      element: <TambahBerita />,
    },
    {
      path: "/admin/berita/edit-berita/:id",
      element: <EditBerita />,
    },
    {
      path: "/admin/festival",
      element: <AdminFestival />,
    },
    {
      path: "/admin/festival/tambah-festival",
      element: <TambahFestival />,
    },
    {
      path: "/admin/festival/edit-festival/:id",
      element: <EditFestival />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

// OTHER WAYS FOR SET ROUTES

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
