import React, { useContext } from "react"
import UserContext from "../auth/UserContext";
import ProfileForm from "./ProfileForm";
import LoadingSpinner from "../common/LoadingSpinner";
import "./Profile.css"
import { Typography, CssBaseline, Container, Box, Grid } from '@mui/material';
import { ListGroup, ListGroupItemHeading } from "reactstrap";


const Profile = () => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    console.log("no user logged in")
    return <LoadingSpinner />
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className="Profile-container">
        <Box className="Profile-box">
          <Grid container spacing={2} columns={16}>
            <Grid xs={6}>
              <Typography variant="h3" gutterBottom>
                Welcome {currentUser.username}
              </Typography>
              <ListGroup>
                <ListGroupItemHeading>Name: {currentUser.firstName} {currentUser.lastName}</ListGroupItemHeading>
                <ListGroupItemHeading>Email Address: {currentUser.email}</ListGroupItemHeading>
              </ListGroup>
            </Grid>
            <Grid xs={10}>
              <ProfileForm />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Profile;