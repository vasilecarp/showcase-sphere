import React from "react";
import "./PortfolioItem.css";

function PortfolioItem({ title, image }) {
  return (
    <div className="portofolioitem">
      <div className="portofolioitem">
        <p>{title}</p>
        <img src={image} alt="" />
        <button>Show Portofolio</button>
      </div>      
    </div>
  );
}

export default PortfolioItem;
