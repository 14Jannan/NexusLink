import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import "./Navigation.css"; // Imports the CSS for styling

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // This state will track if the mobile menu is open or closed.
  const [isMenuOpen, setMenuOpen] = useState(false);

  // This function flips the state to open/close the menu.
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // This function ensures the menu closes when a link is clicked.
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleContactClick = (e) => {
    closeMenu();
    e.preventDefault();
    if (location.pathname === '/home' || location.pathname === '/') {
      const footer = document.getElementById('footer-contact');
      if (footer) footer.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/home#footer-contact');
    }
  };

  const handleLogout = async () => {
    closeMenu();
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error signing out: ", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/home" className="navbar-logo" onClick={closeMenu}>
          NexusLink
        </Link>
      </div>

      {/* --- THE NEW HAMBURGER MENU BUTTON --- */}
      {/* This button will be styled with pure CSS to look like three lines.
          The 'open' class is added when the menu is active. */}
      <div 
        className={isMenuOpen ? "hamburger-menu open" : "hamburger-menu"} 
        onClick={toggleMenu}
      >
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>

      {/* The list of navigation links.
          The 'open' class is added when the menu is active. */}
      <ul className={isMenuOpen ? "nav-list open" : "nav-list"}>
        <li className="nav-item">
          <Link to="/home" onClick={closeMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/advertisements" onClick={closeMenu}>Careers</Link>
        </li>
        <li className="nav-item">
          <a href="#footer-contact" onClick={handleContactClick}>Contact</a>
        </li>
        <li className="nav-item">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;