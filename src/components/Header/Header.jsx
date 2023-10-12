import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
  <div className="Header">
    <Link to="/"><h1>{props.title}</h1></Link>
  </div>
  );
};

export default Header;