import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageRoot from "./pages/PgaeRoot";
import Home from "./pages/Home";

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
  return (
    <RouterProvider router={router} />
  )
};

export default App;
