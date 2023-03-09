import React from "react";
import { Link } from "react-router-dom";
import "./gigcard.css";
import star from "../../assets/star.png"
import doller from "../../assets/heart.png"
const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="links">
      <div className="gigCard">
        <img src={item?.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item?.pp} alt="" />
            <span>{item?.username}</span>
          </div>
          <p>{item?.desc}</p>
          <div className="star">
            <img src={star} alt="" />
            <span>{item?.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src={doller} alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2> ${item?.price} <sup>99</sup></h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
