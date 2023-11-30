import React from "react";
import { IMG_CDN_URL } from "../Constant";
//rating image url
const RestaurantCard = ({ name, cuisines, imageUrl, rating }) => {
  return (
    <div className="card">
      <div className="cardimage">
        <img src={imageUrl} alt="logoo" />
      </div>
      <h2>{name.length>15?name.substr(0,15)+"...":name}</h2>
      {/* <hr /> */}
      <p>{cuisines+","}</p>
      {/* <hr /> */}
      <span>{rating} Stars</span>
    </div>
  );
};

export default RestaurantCard;
