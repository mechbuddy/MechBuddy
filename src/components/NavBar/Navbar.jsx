import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onClick }) => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setShow(false); // Close the menu when route changes
  }, [pathname]);

  return (
    <div className="navbar ">
      <div className="heading">
        <h1>
          Mech <span className="text-black">Buddy</span>
        </h1>
        <p className="hidden sm:block">Merchants & Mechanics</p>
      </div>

      <div className="menu" onClick={() => setShow(!show)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={show ? "content" : "nocontent"}>
        <Link to="/" className={pathname === "/" ? "font-medium text-Primary-red font-sans" : "font-light font-sans hover:text-Primary-red transition duration-500 ease-in-out"}>
          Home
        </Link>
        <Link
          to="/aboutus"
          className={pathname === "/aboutus" ? "font-medium font-sans text-Primary-red" : "font-sans font-light hover:text-Primary-red transition duration-500 ease-in-out"}
        >
          About Us
        </Link>
        <Link
          to="/aboutus"
          className={pathname === "/bePartner" ? "font-medium font-sans text-Primary-red" : "font-sans font-light hover:text-Primary-red transition duration-500 ease-in-out"}
        >
          Be A Partner
        </Link>
        <Link
          to="/aboutus"
          className={pathname === "/contact" ? "font-medium font-sans text-Primary-red" : "font-sans font-light hover:text-Primary-red transition duration-500 ease-in-out"}
        >
          Contact Us
        </Link>

        <button onClick={onClick}>Log In</button>
        <button onClick={onClick} id="btn2">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;