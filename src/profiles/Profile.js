import React, { useContext } from "react"
import { useParams } from "react-router-dom";

import UserContext from "../auth/UserContext";
import ProfileForm from "./ProfileForm";
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ListGroup, ListGroupItemHeading, ListGroupItemText } from "reactstrap";


const Profile = () => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    console.log("no user logged in")
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h1" gutterBottom>
          Welcome {currentUser.username}
        </Typography>
        <ListGroup>
          <ListGroupItemHeading>{currentUser.firstName}</ListGroupItemHeading>
          <ListGroupItemText>First name</ListGroupItemText>
          <ListGroupItemHeading>{currentUser.lastName}</ListGroupItemHeading>
          <ListGroupItemText>Last Name</ListGroupItemText>
          <ListGroupItemHeading>{currentUser.email}</ListGroupItemHeading>
          <ListGroupItemText>Email Address</ListGroupItemText>
        </ListGroup>
      </Container>

      <Container>
        <ProfileForm />
      </Container>
    </>
  )
}

export default Profile;