import React from "react";
import { NavLink } from "react-router-dom";
import './styles/Nav.css'

function Nav() {
  return (
    <div className="nav-main-container">
      <NavLink to='/about' className='nav nav-home' activeClassName='active'>About</NavLink>
      <NavLink to='/works' className='nav nav-works' activeClassName='active'>Works</NavLink>
      <NavLink to='/resume' className='nav nav-resume' activeClassName='active'>Resumé</NavLink>
    </div>
  );
}
 export default Nav