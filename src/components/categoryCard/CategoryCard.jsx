import React from "react";
import { Link } from "react-router-dom";
import "./categoryCard.css";
const CategoryCard = ({ item }) => {
  return (
    <Link to="/gig/123">
      <div className="categoryCard">
        <div className="categoryContainer"></div>
      </div>
    </Link>
  );
};

export default CategoryCard;
