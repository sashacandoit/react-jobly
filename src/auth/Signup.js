import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';


const Signup = ({ signup }) => {

  const navigate = useNavigate();

  const INITIAL_STATE = { username: "", password: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    let result = await signup(formData)
    console.log(formData)
    if (result.success) {
      navigate("/");
    } else {
      setFormErrors(result.errors);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(register => ({ ...register, [name]: value }))
  }



  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h2" gutterBottom>
          Sign Up
        </Typography>
        <form className="signup-form" onSubmit={handleSubmit}>

          {formErrors.length
            ? <Alert variant="outlined" severity="error" messages={formErrors} />
            : null
          }

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            className="signup-form-input"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            className="signup-form-input"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="signup-form-input"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            className="signup-form-input"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="signup-form-input"
            value={formData.lastName}
            onChange={handleChange}
          />

          <button type="submit" className="signup-form-submit">
            Sign Up
          </button>

        </form>
      </Container>
    </>
    
  );
}

export default Signup;