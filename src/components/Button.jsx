import { Link } from "react-router-dom";

const Button = (props) => {
  const { name, linkTo, color } = props;

  return (
    <Link to={linkTo} className={`px-12 py-3 text-base font-semibold rounded ${color == 'white' ? 'text-brown-50 border border-brown-50 bg-white' : 'text-white bg-brown-50'}`}>{name}</Link>
  )
}

export default Button;
