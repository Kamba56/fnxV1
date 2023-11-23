import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AboutHeader from "../components/AboutHeader";

const AboutRoot = () => {
  return (
    <>
      <AboutHeader />
      
      <Outlet />

      <Footer />
    </>
  )
};

export default AboutRoot;
