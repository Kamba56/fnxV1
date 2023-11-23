import { Link } from "react-router-dom";
import logo from "../assets/images/log.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-16 bg-blue-50 text-white py-20 px-[5%]">
      <div className="flex flex-col gap-5 lg:flex-row items-start lg:justify-between mb-8">
        <Link to='/' className="w-16">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-2xl">Send us an email or give us your information and we wil get back to you.</h3>
          <div className="w-fit self-end">
            <Button name="Contact Us" color="brown" linkTo="/contact" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-blue-10 text-lg font-normal">FNX Dublin Limited is registered in the Republic of Ireland with <span className="font-bold">Company Number <span className="text-brown-50">682114</span> </span>. FNX Dublin Limited is authorised under AIFMD by Central Bank of Ireland with <span className="font-bold">registration number <span className="text-brown-50">C441669</span> </span>.</p>

        <ul className="flex flex-col gap-3 font-bold text-lg">
          <Link to='/about/discalimer'>DISCLAIMER</Link>
          <Link to='/about/privacy'>PRIVACY POLICY</Link>
          <Link to='/about/sustainability'>SFDR  Disclosures</Link>
        </ul>
      </div>

      <p className="font-semibold text-sm">©️ 2023 FNX Dublin Limited, All Rights Reserved.</p>
    </footer>
  )
};

export default Footer;
