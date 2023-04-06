import React from "react";

const Card = () => {
  return (
    <>
      <div class="card carousel-card carousel-card" style={{width: "100%",height:"30rem"}}>
        <img src="https://assets.thehansindia.com/h-upload/2022/04/30/1289736-politics.webp" class="card-img-top card-image" alt="..." />
        <div class="card-body">
          <h5 class="card-title carousel-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            
          </p>
          <button type="button" class="btn btn-primary card-btn"><a href="#" class=""></a>Primary</button>
          {/* <a href="#" class="btn btn-primary card-btn">
            Go somewhere
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Card;
