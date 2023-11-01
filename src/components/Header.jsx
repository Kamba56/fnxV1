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
    <header className="flex justify-between items-center p-8 py-6 lg:py-10 lg:p-16 bg-transparent z-[100]">
      <Link to='/' className="w-16">
        <img src={logo} alt="Logo" />
      </Link>

      <button onClick={openNav} className="text-white">
        <BiMenuAltRight size={45} />
      </button>

      {nav && (<div className="w-[65%] md:w-[50%] bg-white fixed top-0 right-0 z-[1000] h-screen flex items-center pl-10 lg:pl-16">
        <button onClick={closeNav} className="absolute top-6 right-6">
          <GrClose size={30} />
        </button>
        <ul className="flex flex-col items-start gap-6 text-2xl font-medium">
          <li>
            <Link>Services</Link>
          </li>

          <li>
            <Link>About Us</Link>
          </li>

          <li>
            <Link>Values</Link>
          </li>

          <li>
            <Link>Team</Link>
          </li>

          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>)}
    </header>
  )
};

export default Header;
