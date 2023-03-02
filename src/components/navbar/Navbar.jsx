import React from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
            <span className="text">fiverr</span>
          {/* </Link> */}
          <span className="dots">.</span>
        </div>
        <div className="links">
          <span>Fiverr Buisness</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>Test</span>
        <span>Test2</span>
      </div>
    </div>
  );
};

export default Navbar;
