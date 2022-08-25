import React, { useState } from 'react';
import './Navbar.css';
import GetScreenWidth from './ScreenWidth';
import { NavLink } from "react-router-dom";
import Face2Icon from '@mui/icons-material/Face2';
import DehazeSharpIcon from '@mui/icons-material/DehazeSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

function Navbar() {

  const [menuClick, setMenuClick] = useState(false);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  }

  const screenWidth = GetScreenWidth();
  const breakpoint = 915;

  return (
    <div className={screenWidth.width > breakpoint ? 'navbar-container' : 'navbar-container mobile'}>
      <div className="logo">
        <NavLink exact="true" activeclassname="active" to="/"> DIVP  <Face2Icon />  </NavLink>
      </div>

      <nav className='navbar'>
        <div className='mobilenav'>
          <div onClick={handleMenuClick}>
            {menuClick ? <CloseSharpIcon /> : <DehazeSharpIcon />}
          </div>
        </div>
        <ul className={menuClick ? 'show-menu' : 'hide-menu'}>
          <li><NavLink exact="true" activeclassname="active" to="/"> Home  </NavLink> </li>
          <li> <NavLink activeclassname="active" to="/AboutMe">About Me</NavLink> </li>
          <li><NavLink activeclassname="active" to="/TeckStack">TeckStack</NavLink></li>
          <li> <NavLink activeclassname="active" to="/ContactMe">Contact Me</NavLink> </li>

        </ul>

      </nav>
    </div>
  )
}

export default Navbar
