import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageRoot = () => {
  return (
    <>
      <Header />
      
      <Outlet />

      <Footer />
    </>
  )
};

export default PageRoot;
