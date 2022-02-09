import React from "react";
import "./DetailInfo.scss";

const DetailInfo = (props) => {
  console.log(props);
  return (
    <div className="detailInfo">
      <div className="detailInfo-div">
        <img
          className="detailInfo-div__img"
          src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644329435/App-Pet/patita-detalles_vq3ic3.png"
          alt="logo pata"
        />
        <h4 className="detailInfo-div__title">{props.title}</h4>
      </div>
      <p className="detailInfo-info">{props.detail}</p>

      {props.detail===true ? <p>Si</p> : (props.detail===false ? <p>No</p> : <p>{props.detail}</p>)}
    </div>
  );
};

export default DetailInfo;
