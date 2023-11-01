import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const PageRoot = () => {
  return (
    <>
      <Header />
      
      <Outlet />
    </>
  )
};

export default PageRoot;
