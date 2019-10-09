import React from "react";

const ImgCard = props => {
    return (
      <div className="Img-list " key={props.id}>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <img src={props.picture} alt="Nasa APOD"/>
          <h2>About the picture:</h2>
          <p>{props.description}</p>
        </div>
    );
  };
export default ImgCard;
