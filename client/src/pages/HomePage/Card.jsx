import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer/Footer";

const Card = (props) => {
  const [data,Setdata]=useState(props)
  const[saved,setSaved]=useState(false);
  const handleClick=()=>{
    setSaved(true)
  }
  // console.log(props)
  return (
    <>
      <div class="card carousel-card carousel-card" style={{width: "90%",height:"30rem"}}>
        <img src="https://assets.thehansindia.com/h-upload/2022/04/30/1289736-politics.webp" class="card-img-top card-image" alt="..." />
        <div class="card-body">
        <div className="d-flex justify-space-between align-items-left flex-row">
        <div><h5 class="card-title carousel-title">title</h5></div>
        <div><button onClick={handleClick}><i className={`fa-${saved ? "solid" : "regular"} fa-bookmark fa-xl ml-2`} style={{color:" #af695c"}}></i></button></div>
          </div>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            
          </p>
          
          <Link to="/detail"><button type="button" class="btn btn-primary card-btn">Read More</button></Link>
        </div>
      </div>
    </>
  );
};

export default Card;
