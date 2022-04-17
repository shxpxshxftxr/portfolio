import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div id="name">CD</div>
      <div id="navlinks">
        <Link className="navlinks" to="/">About</Link>

        <Link className= "navlinks" to="/">Portfolio</Link>

        <Link className= "navlinks" to="/">Resume</Link>

      </div>
    </nav>
  );
};

export default Navbar;
