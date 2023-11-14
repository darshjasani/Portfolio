import React, { useState,useEffect } from 'react';
import './Navbar.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Name from './TextAnima/TextAnima';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Set the navbar to be visible after a delay (adjust the delay as needed)
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 700);

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
  }, []);

  return (
    <>
        <nav className={`navbar ${visible ? 'visible' : ''}`}>
        <div className="logo">
          <Name text="Darshkumar Jasani" delay={150} infinite/>
          </div>
        <div className={`${isMenuOpen ? 'hidden' : 'hamburger'}`} onClick={toggleMenu} > <MenuOpenIcon/> </div>
        {isMenuOpen && (
            <div className={` ${!isMenuOpen ? 'hidden' : 'close_button'}`} onClick={toggleMenu} > <HighlightOffIcon/></div>
        )}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <ul className="social">
                <li></li>
                <li><a href = "#"><TwitterIcon/></a></li>
                <li><a href = "#"><LinkedInIcon/></a></li>
                <li><a href = "#"><InstagramIcon/></a></li>
                <li><a href = "#"><EmailIcon/></a></li>
                <li></li>
              </ul>
            </li>
        </ul>
        </nav>
    </>
  );
}

export default Navbar;
