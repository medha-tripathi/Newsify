import React, { useState } from "react";
import "./Styles/navbar.css";
import { Link } from "react-router-dom";
import Weather from "./Weather";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const Navbar = () => {
  const [show,setShow]=useState(false);
  const[weather,showWeather]=useState(false)
  const onClick=()=>{
    if(weather===false)
    showWeather(true)
    else
    showWeather(false)
  }

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div class="total">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mainNav">
        <div class="container-fluid navbar">
          <p class="navbar-brand title">
            Newsify
          </p>
          <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={()=>setShow(!show)}
    >
      <span className="navbar-toggler-icon" />
    </button>
          <div class="navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link to="/" className="nav-link link">Home</Link>
              </li>
              <li class="nav-item">
              <Link to="/team" className="nav-link link">About</Link>
              </li>
              <li class="nav-item">
              <Link to="/savedarticle" className="nav-link link">Saved Articles</Link>
              </li>
              <li class="nav-item">
                <Link to="/login" className="nav-link link">Login</Link>
              </li>
            </ul>
            <form class="d-flex searchBar">
              <input
                class="form-control me-2 search-input abc"
                type="search"
                placeholder="Search your news"
                aria-label="Search"
              />
              <button class="btn btn-outline-success search-btn" type="submit">
                Search
              </button>
              
            </form>
            <Button onClick={handleToggle}><i class="fa-solid fa-cloud-moon-rain fa-2xl" style={{color: "#af695c"}}></i></Button>
      <Backdrop
        sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Weather/>
      </Backdrop>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
