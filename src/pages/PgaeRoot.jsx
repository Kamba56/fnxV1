import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import logo from "../assets/images/blacklogo.svg"

const PageRoot = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []); 

  return (
    <>
    {
      loading ? (
        <div className="bg-white h-screen w-full flex justify-center items-center z-[100000000]">
          <figure className="w-24 animate-invert">
            <img src={logo} alt="" />
          </figure>
        </div>
      ) : (<><Header />
      
      <Outlet />

      <Footer /> </>)}
    </>
  )
};

export default PageRoot;
