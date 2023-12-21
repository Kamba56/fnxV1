import { NavLink } from "react-router-dom"

const FooterNav = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav className="w-full">
      <ul className="font-normal text-base flex justify-between w-full">
        <li>
          <NavLink to="/" className={({isActive}) => (
            isActive ? "text-[#4C93AB] underline" : "text-white no-underline"
          )} onClick={handleScrollToTop}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/services/" className={({isActive}) => (
            isActive ? "text-[#4C93AB] underline" : "text-white no-underline"
          )} onClick={handleScrollToTop}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/values" className={({isActive}) => (
            isActive ? "text-[#4C93AB] underline" : "text-white no-underline"
          )} onClick={handleScrollToTop}>Values</NavLink>
        </li>
        <li>
          <NavLink to="/team" className={({isActive}) => (
            isActive ? "text-[#4C93AB] underline" : "text-white no-underline"
          )} onClick={handleScrollToTop}>Team</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive}) => (
            isActive ? "text-[#4C93AB] underline" : "text-white no-underline"
          )} onClick={handleScrollToTop}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default FooterNav;
