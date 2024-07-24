// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-zwhite text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">School</h1>
        <ul className="flex space-x-4 font-semibold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/faculty">Faculty</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
