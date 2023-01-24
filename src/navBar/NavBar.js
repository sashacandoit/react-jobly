import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";



const NavBar = () => {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact="true" to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink exact="true" to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact="true" to="/jobs">Jobs</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar;