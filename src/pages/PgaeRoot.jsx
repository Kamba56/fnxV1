import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/blacklogo.svg";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

const PageRoot = () => {
  const [loading, setLoading] = useState(true);
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x174dff,
          backgroundColor: 0xffffff
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
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
        <div ref={vantaRef} className="bg-white h-screen w-full flex justify-center items-center z-[100000000]">
          <figure className="animate-invert w-32">
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
