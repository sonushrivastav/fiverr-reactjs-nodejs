import React, { useEffect, useState } from "react";
import img from "../../assets/Anime-1.jpg"
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {

  const [active, setActive] = useState(false)
  const [open,setOpen]=useState(false)
  
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
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="links">
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
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )
                }
                <span>Orders</span>
                <span>Messages</span>
                <span>Logout</span>
              </div>}
            </div>
          )}
        </div>
      </div>
      {
        active && (
          <>

      <hr />
      <div className="menu">
        <span>Test</span>
        <span>Test2</span>
      </div>
          </>
        )
      }
    </div>
  );
};

export default Navbar;
