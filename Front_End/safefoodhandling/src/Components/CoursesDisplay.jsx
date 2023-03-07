import React, { useState } from "react";
import "./css/CourseDisplay.css";
import data from "./products.json";
import { Link } from "react-router-dom";
import CourseModule from "./CourseModule1";
import image from "./food.jpg";

function Card({ item }) {
  const [showNewComponent, setShowNewComponent] = useState(false);

  function handleButtonClick() {
    setShowNewComponent(true);
  }

  return (
    <div className="card">
      <div className="card-front">
        <img src={image} alt={item.title} />
        <div className="card-info">
          <h3>Course name:{item.name}</h3>
          <p>Author:{item.Author}</p>
          <p>Content:{item.description}</p>
        </div>
      </div>
      <div className="card-back">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.content}</p>
        <span>{item.price}</span>
        <br></br>

        <button className="NextButton" onClick={handleButtonClick}>
          <Link to="/CourseModule">
            <article> BUY </article>
          </Link>
        </button>
        <button className="button">Add to whis list </button>
      </div>
    </div>
  );
}

function CourseDisplay() {
  return (
    <div className="cards-container">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CourseDisplay;
