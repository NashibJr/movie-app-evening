import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ label, route }) => {
  return (
    <li>
      <Link to={route}>{label}</Link>
    </li>
  );
};

export default NavLink;
