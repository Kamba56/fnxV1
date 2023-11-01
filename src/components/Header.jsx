import { Link } from "react-router-dom";
import logo from "../assets/images/log.svg";
import {BiMenuAltRight} from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Header = () => {
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

      <button data-aos="fade-left" data-aos-duration="1700" onClick={openNav} className="text-blue-50">
        <BiMenuAltRight size={45} />
      </button>

      {nav && (<div data-aos="fade-down-left" data-aos-duration="2000" className="w-[65%] md:w-[50%] bg-white fixed top-0 right-0 z-[1000] h-screen flex items-center pl-10 lg:pl-16">
        <button onClick={closeNav} className="absolute top-6 right-6">
          <GrClose size={30} />
        </button>
        <ul className="flex flex-col items-start gap-6 text-2xl font-medium">
          <li className="after:w-2 after:h-1 relative after:absolute after:bottom-0 after:bg-blue-50 after:left-0 hover:after:w-full after:transition-width after:duration-700">
            <Link>Services</Link>
          </li>

          <li className="after:w-2 after:h-1 relative after:absolute after:bottom-0 after:bg-blue-50 after:left-0 hover:after:w-full after:transition-width after:duration-700">
            <Link>About Us</Link>
          </li>

          <li className="after:w-2 after:h-1 relative after:absolute after:bottom-0 after:bg-blue-50 after:left-0 hover:after:w-full after:transition-width after:duration-700">
            <Link>Values</Link>
          </li>

          <li className="after:w-2 after:h-1 relative after:absolute after:bottom-0 after:bg-blue-50 after:left-0 hover:after:w-full after:transition-width after:duration-700">
            <Link>Team</Link>
          </li>

          <li className="after:w-2 after:h-1 relative after:absolute after:bottom-0 after:bg-blue-50 after:left-0 hover:after:w-full after:transition-width after:duration-700">
            <Link>Contact</Link>
          </li>
        </ul>
      </div>)}
    </header>
  )
};

export default Header;
