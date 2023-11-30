import React from "react";
import "./Home.css";
import PortfolioItem from "./PortfolioItem";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://files.oaiusercontent.com/file-ihIor4RtjQ6rDrzvUM0ABlYk?se=2023-11-30T18%3A33%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D51385eee-c91f-4aed-a040-4893c2fa706e.webp&sig=aOZF6XG3pB4gKCqE5dhCu2EvEsEFx3yMzQofBnXp6zM%3D"
          alt=""
        />
        <div className="home__row">
          <PortfolioItem />
          <PortfolioItem />
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
