import { Link } from "react-router";

export default function link({ btnname, icon = null, className = "", linkTo }) {
  return (
    <Link 
      to={linkTo} 
      className={`add-to-cart-btn ${className}`}
    >
      {icon}
      {btnname}
    </Link>
  );
}
