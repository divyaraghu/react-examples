import React,{useState} from 'react';
import './Navbar.css';
import GetScreenWidth from './ScreenWidth';
import { NavLink } from "react-router-dom";

function Navbar() {

  const [menuClick,setMenuClick] = useState(false);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  }

  const screenWidth = GetScreenWidth();
  const breakpoint = 915;
  
  return (
    <div className={screenWidth.width > breakpoint ? 'navbar-container' : 'navbar-container mobile'}>
      <div className="logo">
        DIVP  <i className="fab fa-typo3"></i>
      </div>
        
      <nav className='navbar'>
        <div className='mobilenav'>
          <i className={menuClick ? 'fas fa-times' : 'fas fa-bars'} onClick={handleMenuClick} > </i>  
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