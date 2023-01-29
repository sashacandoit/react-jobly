import React, { useContext } from "react"
import UserContext from "../auth/UserContext";
import ProfileForm from "./ProfileForm";
import { Typography, CssBaseline, Container } from '@mui/material';
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