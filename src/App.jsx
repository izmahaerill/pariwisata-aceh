// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import DestinasiWisata from "./pages/destinasi-wisata/index";
// import Home from "./pages/index";
// import Festival from "./pages/festival/index";

// function App() {
//   const router = createBrowserRouter([
//     {
//       index: true,
//       element: <Home />,
//     },
//     {
//       path: "/destinasi-wisata/",
//       element: <DestinasiWisata />,
//     },
//     {
//       path: "/festival",
//       element: <Festival />,
//     },
//   ]);

//   return (
//     <>
//       <RouterProvider router={router}></RouterProvider>
//     </>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DestinasiWisata from "./pages/destinasi-wisata/index";
import Home from "./pages/index";
import Festival from "./pages/festival/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinasi-wisata" element={<DestinasiWisata />} />
        <Route path="/festival" element={<Festival />} />
      </Routes>
    </Router>
  );
}

export default App;
