import React, { useState, useEffect } from 'react';
import '../Css-files/Nav.css';
import logo from '../logo.png';
import avatar from '../avatar.png';

function Nav() {
   const [show, setShow] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', function () {
         if (window.scrollY > 100) setShow(true);
         else setShow(false);
      });
      return () => window.removeEventListener('scroll');
   }, []);

   return (
      <div className={`nav ${show && 'nav_black'}`}>
         <img src={logo} alt="Netflix-logo" className="nav_logo" />
         <img src={avatar} className="nav_avatar" alt="smiley face" />
      </div>
   );
}

export default Nav;
