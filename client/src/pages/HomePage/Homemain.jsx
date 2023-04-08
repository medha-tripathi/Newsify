import React from "react";
import Navbar from "./Navbar"
import NavbarSec from "./NavbarSec";
import Weather from "./Weather"

import "./Styles/navbar.css"
import "./Styles/navbarSec.css"
import "./Styles/carousel.css"
import "./Styles/homemain.css"

function Homemain() {
  return (
    <>
      <div className="main">
        <Navbar />
        <NavbarSec />
        {/* <Weather/> */}
      </div>
    </>
  );
}

export default Homemain;