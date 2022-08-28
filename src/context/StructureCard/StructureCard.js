import React from "react";

function StructureCard({ img, name, description }) {
  if (description === "") {
    description = "no explanation";
  }
  return (
    <div className="card-container">
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>

      <div className="card-content">
        <div className="card-title">
          <h3>{name}</h3>
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default StructureCard;
