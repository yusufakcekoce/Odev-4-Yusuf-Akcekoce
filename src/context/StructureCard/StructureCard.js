import React from "react";
import { Link } from "react-router-dom";

function StructureCard({ img, name, description, page, id }) {
  if (description === "") {
    description = "no explanation";
  }
  return (
    <Link to={`${page}${id}`} key={id}>
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
    </Link>
  );
}

export default StructureCard;
