import React, { useState, useContext } from "react";
import JoblyApi from "../api";
import UserContext from "../auth/UserContext";
import Typography from '@mui/material/Typography';
import "./ProfileForm.css"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const ProfileForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });

  async function handleSubmit(e) {
    let profileData = {
      firstName: formData.firstName,
      lastName: formData.firstName,
      email: formData.email,
      password: formData.password
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = JoblyApi.saveProfile(username, profileData);
    } catch (err) {
      debugger;
      return;
    };
    setFormData(data => ({ ...data, password: "" }));

    setCurrentUser(updatedUser);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(update => ({ ...update, [name]: value }))
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h2" gutterBottom>
          Update User Info
        </Typography>
        <form className="update-form" onSubmit={handleSubmit}>

          {/* {formErrors.length
            ? <Alert variant="outlined" severity="error" messages={formErrors} />
            : null
          } */}

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            className="update-form-input"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="update-form-input"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            className="update-form-input"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="update-form-input"
            value={formData.lastName}
            onChange={handleChange}
          />

          <button type="submit" className="update-form-submit">
            Update
          </button>
        </form>
      </Container>
    </>
  )
}

export default ProfileForm;