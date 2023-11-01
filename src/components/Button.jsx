import { Link } from "react-router-dom";

const Button = (props) => {
  const { name, linkTo, color } = props;

  return (
    <Link to={linkTo} className={`px-12 py-3 text-base font-semibold rounded transition duration-500 ${color == 'white' ? 'text-brown-50 border border-brown-50 bg-white hover:text-white hover:bg-brown-50' : 'text-white bg-brown-50 hover:text-brown-50 hover:bg-white hover:border-brown-50 hover:border'}`}>{name}</Link>
  )
}

export default Button;
