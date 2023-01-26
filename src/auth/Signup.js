import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Container } from "@mui/system";


const Signup = ({ signup }) => {

  const navigate = useNavigate();

  const INITIAL_STATE = { username: "", password: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    let result = await signup(formData.username, formData.password, formData.firstName, formData.lastName, formData.email)
    console.log(result)
    if (result.success) {
      navigate("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(register => ({ ...register, [name]: value }))
  }



  return (
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        Sign Up
      </Typography>
      <form id="signup-form" onSubmit={handleSubmit}>
        <TextField
          id="email-input"
          name="email-input"
          label="Email Address"
          type="email"
          variant="filled"
          onChange={handleChange}
          className="login-form-input"
        />
        <TextField
          id="username-input"
          name="username-input"
          label="Username"
          variant="filled"
          onChange={handleChange}
          className="login-form-input"
        />
        <TextField
          id="password-input"
          name="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={handleChange}
          className="login-form-input"
        />

        <TextField
          id="first-name-input"
          name="first-name-input"
          label="First Name"
          variant="filled"
          onChange={handleChange}
          className="login-form-input"
        />

        <TextField
          id="last-name-input"
          name="last-name-input"
          label="Last Name"
          variant="filled"
          onChange={handleChange}
          className="login-form-input"
        />

        {formErrors.length
          ? <Alert variant="outlined" severity="error" messages={formErrors} />
          : null
        }

        <Button
          type="submit"
          variant="outlined"
          size="large">Sign Up</Button>
      </form>
    </Container>
  );
}

export default Signup;