import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Student Result Management System</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="students">Students</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="result">Results</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;