import React from "react";
import "./Detail.scss";

const Detail = (props) => {
  return (
    <div className="detail">
      <div className="detail-div">
        <img className="detail-div__img" src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644329435/App-Pet/patita-detalles_vq3ic3.png" alt="logo pata"/>
        <h4 className="detail-div__title">{props.title}</h4>
      </div>
      <p className="detail-info">{props.detail}</p>
    </div>
  );
};

export default Detail;
