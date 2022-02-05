import React from "react";
import CardItem from "./Card-Item/CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
              text="Explore the hidden waterfall far deep inside the amazon jungle"
              label="Adventure"
              pa
              th="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
