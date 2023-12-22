import { NavLink } from "react-router-dom";

const TwinBtn = () => {
  return (
    <section className="flex flex-col gap-4 items-stretch lg:pt-24 min-w-[320px]">
      
    <NavLink data-aos="fade-up" to="/services/" className={({isActive}) => (`px-12 text-center hover:shadow-lg flex items-center justify-center py-3 text-base font-normal rounded ${!isActive ? 'text-brown-50 border border-brown-50 bg-white hover:text-brown-100 hover:border-brown-100 active:text-brown-50 active:border-brown-50' : 'text-white bg-brown-50 hover:bg-brown-100 active:bg-brown-50 hover:shadow-lg'}`)}>Our Comprehensive Service</NavLink>

    <NavLink data-aos="fade-up" to="/services/approach" className={({isActive}) => (`px-12 text-center hover:shadow-lg flex items-center justify-center py-3 text-base font-normal rounded ${!isActive ? 'text-brown-50 border border-brown-50 bg-white hover:text-brown-100 hover:border-brown-100 active:text-brown-50 active:border-brown-50' : 'text-white bg-brown-50 hover:bg-brown-100 active:bg-brown-50 hover:shadow-lg'}`)}>Our Approach</NavLink>
    </section>
  )
};

export default TwinBtn;
