import { NavLink } from "react-router-dom"

const FooterNav = () => {
  return (
    <nav className="w-full">
      <ul className="font-normal text-base flex justify-between w-full">
        <li>
          <NavLink to="/" className={({isActive}) => (
            isActive ? "text-[#4C93AB] underline" : "text-white no-underline"
          )}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/services/" className={({isActive}) => (
            isActive ? "text-[#4C93AB] underline" : "text-white no-underline"
          )}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/values" className={({isActive}) => (
            isActive ? "text-[#4C93AB] underline" : "text-white no-underline"
          )}>Values</NavLink>
        </li>
        <li>
          <NavLink to="/team" className={({isActive}) => (
            isActive ? "text-[#4C93AB] underline" : "text-white no-underline"
          )}>Team</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive}) => (
            isActive ? "text-[#4C93AB] underline" : "text-white no-underline"
          )}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default FooterNav;
