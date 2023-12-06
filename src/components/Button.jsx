import { Link } from "react-router-dom";

const Button = (props) => {
  const { name, linkTo, color } = props;

  return (
    <Link data-aos="fade-right" to={linkTo} className={`px-12 text-center hover:shadow-lg flex items-center justify-center py-3 text-base font-normal rounded ${color == 'white' ? 'text-brown-50 border border-brown-50 bg-white hover:text-brown-100 hover:border-brown-100 active:text-brown-50 active:border-brown-50' : 'text-white bg-brown-50 hover:bg-brown-100 active:bg-brown-50 hover:shadow-lg'}`}>{name}</Link>
  )
}

export default Button;
