import React, { useEffect, useState, useContext } from "react";
import Cookies from 'js-cookie';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import "./Navbar.css";

const Navbar = ({ onClickLogin, onClickSignUp }) => {

  let navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { pathname } = location;



  useEffect(() => {
    setShow(false); // Close the menu when route changes
  }, [pathname]);

  function onClickLoginOut() {
    Cookies.remove("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <div className="navbar ">
      <div className="heading">
        <h1>
          Mech <span className="text-black">Buddy</span>
        </h1>
        <p className="hidden sm:block">Aapka Apna Mechanic</p>
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
        {isLoggedIn ? (
          <button id="btn2" onClick={() => { onClickLoginOut(); }}>Log Out</button>
        ) : (
          <>
            <button onClick={() => { onClickLogin(); }}>Log In</button>
            <button onClick={() => { onClickSignUp(); }} id="btn2">Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;