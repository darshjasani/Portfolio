import React, { useState } from 'react';
import './Navbar.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <nav className="navbar">
        <div className="logo">Darshkumar Jasani</div>
        <div className={`${isMenuOpen ? 'hidden' : 'hamburger'}`} onClick={toggleMenu} > <MenuOpenIcon/> </div>
        {isMenuOpen && (
            <div className={` ${!isMenuOpen ? 'hidden' : 'close_button'}`} onClick={toggleMenu} > <HighlightOffIcon/></div>
        )}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
    </>
  );
}

export default Navbar;
