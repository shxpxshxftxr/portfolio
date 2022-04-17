import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div id="name">CD</div>
      <div id="navlinks">
        <Link className="navlinks" to="/">About</Link>

        <Link className= "navlinks" to="/">Portfolio</Link>

        <a className= "navlinks" href="https://docs.google.com/document/d/1EdC1jUJ1OX4eJe2h9zt3_sloOPeuMeUU83LhaYn8mLQ/edit?usp=sharing">Resume</a>

      </div>
    </nav>
  );
};

export default Navbar;
