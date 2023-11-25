import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/blacklogo.svg";
import {BiMenuAltRight} from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const AboutHeader = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(true);
  };

  const closeNav = () => {
    setNav(false);
  }

  return (
    <header className="flex justify-between items-center p-8 py-6 lg:py-10 lg:p-16 bg-transparent absolute top-0 w-full z-[100]">
      <Link data-aos="fade-right" to='/' className="w-16">
        <img src={logo} alt="Logo" />
      </Link>

      <button data-aos="fade-left" onClick={openNav} className="text-blue-50">
        <BiMenuAltRight size={45} />
      </button>

      {nav && (<div data-aos="fade-down-left" className="w-[50%] md:w-[33%] shadow-inner bg-white fixed top-0 right-0 z-[1000] h-screen flex items-center pl-10 lg:pl-16">
        <button onClick={closeNav} className="absolute top-6 right-6">
          <GrClose size={30} />
        </button>
        <ul className="flex flex-col items-start gap-6 text-2xl font-light">

          <li>
            <NavLink className={({isActive}) => (
              isActive ? "text-brown-50 underline" : "text-blue-50"
            )} to="/" onClick={closeNav}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (
              isActive ? "text-brown-50 underline" : "text-blue-50"
            )} onClick={closeNav} to='/services'>Services</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => (
              isActive ? "text-brown-50 underline" : "text-blue-50"
            )} onClick={closeNav} to='/values'>Values</NavLink>
          </li>

          <li>
            <NavLink className={({isActive}) => (
              isActive ? "text-brown-50 underline" : "text-blue-50"
            )} onClick={closeNav} to='/team'>Team</NavLink>
          </li>

          <li>
            <NavLink className={({isActive}) => (
              isActive ? "text-brown-50 underline" : "text-blue-50"
            )} to="/contact" onClick={closeNav}>Contact</NavLink>
          </li>
        </ul>
      </div>)}
    </header>
  )
};

export default AboutHeader;
