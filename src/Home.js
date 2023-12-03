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
          <PortfolioItem
            title="DISCOVER THE WORLD"
            image="https://themewagon.com/wp-content/uploads/2020/04/travelix-1.jpg"
          />
          <PortfolioItem
            title="Vacation"
            image="https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/10/free-travel-agency-website-templates-1000x750.jpg"
          />
        </div>
        <div className="home__row">
          <PortfolioItem
            title="LOVE TRAVEL"
            image="https://www.aerobusinesssolutions.com/wp-content/uploads/travel-website-featured-image-1024x595.jpg"
          />
        </div>
        <div className="home__row">
          <PortfolioItem
            title="DUTCHEXPLORERS"
            image="https://a4h6c5c5.rocketcdn.me/wp-content/uploads/2021/05/Dutch-Explorers-Travel-Agency-Website-Example.jpg"
          />
          <PortfolioItem
            title="JOURNEY"
            image="https://cdn4.vectorstock.com/i/1000x1000/24/38/travel-agency-website-homepage-design-vector-22492438.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
