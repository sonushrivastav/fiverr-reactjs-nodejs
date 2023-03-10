import React, { useState } from "react";
import "./gigs.css";
import downimg from "../../assets/down.png";
import GigCard from "../../components/gigCard/GigCard";
import {gigs} from "../../data"
const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  return (
    <div className="gigs">
      <div className="gigscontainer">
        <span className="breadcrumbs">FIVERR > GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="leftmenu">
            <span>Budged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="rightmenucontainer">
            <span className="sortBy">SortBy</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src={downimg} alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => setSort("abc")}>Newest</span>
                ) : (
                  <span onClick={() => setSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="gigcards">
          {
            gigs?.map((gig) => 
              <GigCard key={gig.id} item={gig} />
            )
         }
        </div>
      </div>
    </div>
  );
};

export default Gigs;
