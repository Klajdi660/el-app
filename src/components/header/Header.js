import React from "react";
import { useContext } from "react";
import MovieContext from "../../store/MovieContext";
import "./Header.css";

const Header = () => {
  const { header } = useContext(MovieContext);

  return <h1 className="section-title">{header}</h1>;
};

export default Header;
