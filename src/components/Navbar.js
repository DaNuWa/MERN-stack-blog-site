import React from 'react';
import {
  Link
} from "react-router-dom";
const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
      <div className="container">
          <a className="navbar-brand" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/posts" className="nav-link">Posts
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
      </div>
    </div>
    </nav>)

}

export default Navbar;
