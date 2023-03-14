import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {

  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const {pathname}=useLocation()
  
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive)

    return () => {
      window.removeEventListener("scroll",isActive)
    }
  }, [])
  
  const currentUser = {
    id: 1,
    username: "john doe",
    isSeller:true
  }

  
  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
            <span className="dots">.</span>
        </div>
        <div className="links">
          <span>Fiverr Buisness</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={()=> setOpen(!open)}>
              <img src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png" alt="" />
              <span>{ currentUser?.username}</span>
              {open && <div className="options">
                {
                  currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">Gigs</Link>
                      <Link className="link" to="/add">Add New Gig</Link>
                    </>
                  )
                }
                <Link className="link" to="/orders">Orders</Link>
                <Link className="link" to="/messages">Messages</Link>
                <Link className="link" to="/">Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {
        active || pathname!=="/" && (
          <>

      <hr />
      <div className="menu">
      <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
            </div>
            <hr />
          </>
        )
      }
    </div>
  );
};

export default Navbar;
