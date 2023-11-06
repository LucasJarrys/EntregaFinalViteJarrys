import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {TitleContext} from "../../context/TitleContext";

const Header = () => {
  const Title = useContext(TitleContext)
  return (
  <div className="Header">
    <Link to="/"><h1>{Title.title}</h1></Link>
      <h2>{Title.subtitle}</h2>
  </div>
  );
};

export default Header;