import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";


import Home from "./pages/Home/Home";
import { HeroUIProvider } from "@heroui/react";
import Blog from "./pages/Blog/Blog";
import WhoAreWe from "./pages/About/WhoAreWe";



function App() {
  const route = createBrowserRouter([
{
    path: "/",
    element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "who", element: <WhoAreWe /> },
    ],
}
  ]
  
  );
  return (
    <HeroUIProvider>
      
      <RouterProvider router={route} />
    </HeroUIProvider>
  );
}

export default App;
