import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
// import logo from "../assets/images/blacklogo.svg";
// import GLOBE from "vanta/dist/vanta.globe.min";
// import * as THREE from "three";

const PageRoot = () => {
  // const [loading, setLoading] = useState(true);
  // const [vantaEffect, setVantaEffect] = useState(0);
  // const vantaRef = useRef(null);


  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     await new Promise(resolve => setTimeout(resolve, 2000));
    //     setLoading(false);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //     setLoading(false); // Set loading to false in case of an error
    //   }
    // };

    // fetchData();
  }, []); 

  return (
    <>
    <><Header />
      
      <Outlet />

      <Footer /> </>
    </>
  )
};

export default PageRoot;
