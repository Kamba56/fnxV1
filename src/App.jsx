import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageRoot from "./pages/PgaeRoot";
import Home from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Services from "./pages/Services";
import Values from "./pages/Values";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import AboutRoot from "./pages/AboutRoot";
import Disclaimer from "./pages/DIsclaimer";
import Sustain from "./pages/Sustain";
import Privacy from "./pages/Privacy";

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
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  },
  {
    path: '/about',
    element: <AboutRoot />,
    children: [
      {
        path: 'disclaimer',
        element: <Disclaimer />
      },
      {
        path: 'privacy',
        element: <Privacy />
      },
      {
        path: 'sustainability',
        element: <Sustain />
      }
    ]
  }
])

const App = () => {
  useEffect(() => {
    AOS.init();

    // Scroll to top on route change
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Add event listener for route changes
    const cleanup = router.subscribe(handleScrollToTop);

    // Clean up the event listener when the component unmounts
    return () => {
      cleanup();
    };
  }, [])
  return (
    <RouterProvider router={router} />
  )
};

export default App;
