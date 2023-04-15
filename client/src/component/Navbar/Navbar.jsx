import React, { useContext, useState } from "react";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
import Weather from "../../pages/HomePage/Weather";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import { Context } from "../..";
import axios from "axios";
import useGeoLocation from "../../pages/Hooks/useGeoLocation";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Navbar = () => {

  const [region, setRegion] = React.useState('');
  
  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  const geolocation = useGeoLocation();

  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const logoutHandler = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/logout", {
        withCredentials: true,
      });
      setIsAuthenticated(false);
    } catch (e) {
      console.log(e);
      setIsAuthenticated(true);
    }
  };

  const [weatherda, setWeatherda] = useState([]);
  const [show, setShow] = useState(false);
  const [weather, showWeather] = useState(false);
  const [search, setSearch] = useState("");

  console.log(search)
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = async () => {
    setOpen(!open);

    var latitude = geolocation.coordinates.lat;
    var longitude = geolocation.coordinates.lng;
    // console.log(latitude)
    // console.log(longitude)
    console.log("hello i am here");
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=dca87896300d471684a114613231004&q=${latitude},${longitude}&aqi=no`
    );
    const data = await res.json();
    setWeatherda(data);

    // console.log(data);

    showWeather(true);

  };

  return (
    <div class="total">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mainNav">
        <div class="container-fluid navbar">
          <p class="navbar-brand title">Newsify</p>
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
                <Link to="/" className="nav-link link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/team" className="nav-link link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/savednews" className="nav-link link">
                  Saved Articles
                </Link>
              </li>
              <li class="nav-item">
                {isAuthenticated ? (
                  <button onClick={logoutHandler} className="nav-link link">
                    Logout
                  </button>
                ) : (
                  <Link to={"/login"} className="nav-link link">
                    Login
                  </Link>
                )}
              </li>
            </ul><Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="region"
          onChange={handleChange}
        >
        <Link to="/regionnews/world"><MenuItem value={"World"}>World</MenuItem></Link>
        <Link to="/regionnews/nation"><MenuItem value={"Nation"}>Nation</MenuItem></Link>
        <Link to="/regionnews/local"><MenuItem value={"Local"}>Local</MenuItem></Link>
        </Select>
      </FormControl>
    </Box>
            <form class="d-flex searchBar">
              <input
                class="form-control me-2 search-input abc"
                type="search"
                placeholder="Search your news"
                aria-label="Search"
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              <Link to={`/search/${search}`}><button class="btn btn-outline-success search-btn" type="submit">
                Search
              </button></Link>
              
              <Button onClick={handleToggle}>
                <i
                  class="fa-solid fa-cloud-moon-rain fa-2xl"   // it's the weather button
                  style={{ color: "#af695c" }}
                ></i>
              </Button>

              <Link to={{pathname:"http://127.0.0.1:5500/client/src/pages/HomePage/Stock.html"}} target="_blank">
                <button>
                  <i
                    className="fa-brands fa-bitcoin fa-2xl mt-2"           //it's the stock market button
                    style={{ color: "#af695c" }}
                  ></i>
                </button>
              </Link>
            </form>
            <Backdrop
              sx={{
                color: "white",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={open}
              onClick={handleClose}
            >
              {weather && <Weather weatherda={weatherda} />}
            </Backdrop>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
