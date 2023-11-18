import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageRoot from "./pages/PgaeRoot";
import Home from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Services from "./pages/Services";
import Values from "./pages/Values";
import Team from "./pages/Team";

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageRoot />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path:'services',
        element: <Services />
      },
      {
        path: 'values',
        element: <Values />
      },
      {
        path: 'team',
        element: <Team />
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
