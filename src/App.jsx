import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageRoot from "./pages/PgaeRoot";
import Home from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageRoot />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
])

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <RouterProvider router={router} />
  )
};

export default App;
