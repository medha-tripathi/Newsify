import React, { useContext, useState } from "react";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
import Weather from "../../pages/HomePage/Weather";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Context } from "../..";
import axios from "axios";

const Navbar = () => {


  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);
  const logoutHandler = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000/logout', { withCredentials: true, });
      setIsAuthenticated(false);
    } catch (e) {
      console.log(e);
      setIsAuthenticated(true);
    }
  }

  const [show, setShow] = useState(false);
  const [weather, showWeather] = useState(false)
  const onClick = () => {
    if (weather === false)
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
            onClick={() => setShow(!show)}
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
                {
                  isAuthenticated ? (<button onClick={logoutHandler} className="nav-link link">Logout</button>)
                    : (
                      <Link to={"/login"} className="nav-link link">Login</Link>
                    )}
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
            <Button onClick={handleToggle}><i class="fa-solid fa-cloud-moon-rain fa-2xl" style={{ color: "#af695c" }}></i></Button>
            <Backdrop
              sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
              <Weather />
            </Backdrop>
            <Link to="http://127.0.0.1:5500/client/src/pages/HomePage/Stock.html"><button><i class="fa-brands fa-bitcoin fa-xl" style={{ color: "#af695c" }}></i></button></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
