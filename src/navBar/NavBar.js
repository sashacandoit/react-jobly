import React, {useContext} from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import UserContext from "../auth/UserContext";
import "./NavBar.css"


const NavBar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  const loggedInNav = () => {
    return (
      <>
        <NavItem>
            <NavLink >Log Out {currentUser.username}</NavLink>
          </NavItem>
      </>
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
        <NavbarBrand href="/">
          Jobly
        </NavbarBrand>
      </Nav>
      <Nav className="ml-auto nav-links-sm" navbar>
        {currentUser ? loggedInNav() : loggedOutNav()}
      </Nav>
    </Navbar>
  )
}

export default NavBar;