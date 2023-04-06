import React from "react";
import "./Styles/navbar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <div class="total">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mainNav">
        <div class="container-fluid navbar">
          <p class="navbar-brand title" href="#">
            Newsify
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link link" href="/homepage">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link " href="team">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="/savednews">
                  Saved article
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link" href="/login">
                  Login
                </a>
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
