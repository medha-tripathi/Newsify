import React from "react";
import Navbar from "../HomePage/Navbar";
import CarouselComponent from "../HomePage/CarouselComponent"
import "../HomePage/Styles/navbar.css";
import "../HomePage/Styles/carousel.css";
import "../SavedNews/savednews.css"

const SavedNews = () => {
  return (
    <div className="saved-news">
      <Navbar />
      <h1 className="saved-text">Saved Article</h1>
      <div>
        <div className="container">
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
};

export default SavedNews;
