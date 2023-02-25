import React from "react";
import data from "../data.json";
import "../stylesheet/foodCard.css";

const FoodCard = ({ data }) => {
  return (
    <div className="main-food-div">
      {data.map((obj, index) => {
        return (
          <div key={index} className="food-div">
            {/* part1 */}
            <figure>
              <img src={obj.img} alt={obj.title}></img>
            </figure>
            {/* part2 */}
            <div className="info-div">
              <div className="food-name-price">
                <h2>{obj.title}</h2>
                <strong>${obj.price}</strong>
              </div>
              <p> {obj.desc} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodCard;
