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
      {props.detail===true ? <p className="detailInfo-info">Si</p> : (props.detail===false ? <p className="detailInfo-info">No</p> : <p className="detailInfo-info">{props.detail}</p>)}
    </div>
  );
};

export default DetailInfo;
