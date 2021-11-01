import React from 'react';
import {Nav, Logo, NavLink, Bars, NavMenu} from "./HeaderElements";

const Header = ({ toggle }) => {
    return (
      <div className="Container">
        <Nav>
          <Logo to="/">
            <img
              src="https://www.catalystmi.com/wp-content/uploads/2019/12/logo-catalystmedia-navbar-desktop-small.png"
              alt="logo"
            />
          </Logo>
          <NavMenu>
            <NavLink className="menu-item" to="projects" smooth={true}>
              Projects
            </NavLink>
            <NavLink className="menu-item" to="about" smooth={true}>
              About
            </NavLink>
            <NavLink className="menu-item" to="contact" smooth={true}>
              Contact
            </NavLink>
          </NavMenu>
          <Bars onClick={toggle} />
        </Nav>
      </div>
    );
}

export default Header
