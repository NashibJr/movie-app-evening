import React from "react";
import NavLink from "../components/NavLink";

const links = [
  { label: "Movies", route: "/" },
  { label: "Users", route: "/users" },
  { label: "Books", route: "/books" },
];

const NavigationBar = () => {
  return (
    <nav className="links">
      <h2>logo</h2>
      <ul>
        {links?.map((link) => (
          <NavLink key={link.route} label={link.label} route={link.route} />
        ))}
      </ul>
      <div />
    </nav>
  );
};

export default NavigationBar;
