import React, {useContext} from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import UserContext from "../auth/UserContext";
import "./NavBar.css"


const NavBar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  const loggedInNav = () => {
    return (
      <NavItem>
        <NavLink href="/" onClick={logout} >Log Out {currentUser.username}</NavLink>
      </NavItem>
    )
  }

  const loggedOutNav = () => {
    return (
      <>
        <NavItem>
          <NavLink href="/signup">Sign Up</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
      </>
    )
  }


  return (
    <Navbar color="dark" dark="true" expand="md">
      <Nav className="ml-auto" navbar>
        <NavbarBrand className="navbar-brand-link" href="/">
          Jobly
        </NavbarBrand>
        <NavItem className="nav-links-lg">
          <NavLink href="/companies">Companies</NavLink>
        </NavItem>
        <NavItem className="nav-links-lg">
          <NavLink href="/jobs">Jobs</NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto nav-links-sm" navbar>
        {currentUser ? loggedInNav() : loggedOutNav()}
      </Nav>
    </Navbar>
  )
}

export default NavBar;