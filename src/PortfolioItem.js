import React from "react";
import "./PortfolioItem.css";

function PortfolioItem() {
  return (
    <div className="portofolioitem">
      <div className="portofolioitem">
        <p>Portfolio Item</p>
        <img
          className="portofolioitem"
          src="https://files.oaiusercontent.com/file-UcrUdrOeU51DtcbeZxhCb3Ba?se=2023-11-30T19%3A28%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D712dc419-aaad-461e-bb4e-5226ae3cee29.webp&sig=8RlcJTPrTOrvryavNU6CqAK2v/NpjLubMPTDJYoSzKE%3D"
          alt=""
        />
        <button>Show Portofolio</button>
      </div>
    </div>
  );
}

export default PortfolioItem;
