import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Routes
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import "./App.css";
import logo from "./images/logo.png";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/events">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <Routes>
          {" "}
          {/* Wrap Routes around Route components */}
          <Route path="/" element={<Home />} /> {/* Use "element" prop */}
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <div class="copyright">
            &copy; 2024 Skinner Tutoring. All rights reserved.
          </div>
          <p>Website created by Rachel Skinner - Web developer</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
