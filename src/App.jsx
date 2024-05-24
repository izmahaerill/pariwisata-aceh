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
import AdminDestinasi from "./pages/admin/admin-destinasi-wisata/index.jsx";
import AdminBerita from "./pages/admin/admin-berita/index.jsx";
import AdminFestival from "./pages/admin/admin-festival/index.jsx";
import TambahDestinasi from "./pages/admin/admin-destinasi-wisata/tambah-destinasi.jsx";
import TambahBerita from "./pages/admin/admin-berita/tambah-berita.jsx";
import TambahFestival from "./pages/admin/admin-festival/tambah-festival.jsx";
import EditDestinasi from "./pages/admin/admin-destinasi-wisata/edit-destinasi.jsx";
import EditBerita from "./pages/admin/admin-berita/edit-berita.jsx";
import editFestival from "./pages/admin/admin-festival/edit-festival.jsx";

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
    {
      path: "/admin/admin-destinasi",
      element: <AdminDestinasi />,
    },
    {
      path: "/admin/admin-destinasi/:id",
      element: <AdminDestinasi />,
    },
    {
      path: "/admin/admin-destinasi/tambah-destinasi",
      element: <TambahDestinasi />,
    },
    {
      path: "/admin/admin-destinasi/edit-destinasi",
      element: <EditDestinasi />,
    },
    {
      path: "/admin/admin-berita",
      element: <AdminBerita />,
    },
    {
      path: "/admin/admin-berita/:id",
      element: <AdminBerita />,
    },
    {
      path: "/admin/admin-berita/tambah-berita",
      element: <TambahBerita />,
    },
    {
      path: "/admin/admin-berita/edit-berita",
      element: <EditBerita />,
    },
    {
      path: "/admin/admin-festival",
      element: <AdminFestival />,
    },
    {
      path: "/admin/admin-festival/:id",
      element: <AdminFestival />,
    },
    {
      path: "/admin/admin-festival/tambah-festival",
      element: <TambahFestival />,
    },
    {
      path: "/admin/admin-festival/edit-festival",
      element: <editFestival />,
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
