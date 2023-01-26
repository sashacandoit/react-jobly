import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Login.css"
import { Container } from "@mui/system";


const Login = ({ login }) => {
  
  const navigate = useNavigate();

  const INITIAL_STATE = { username: "", password: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit (e) {
    e.preventDefault();
    let result = await login(formData.username, formData.password)
    if (result.success) {
      navigate("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(login => ({...login, [name]:value}))
  }



  return (
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        Login
      </Typography>
      <form id="login-form" onSubmit={handleSubmit}>
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
        <Button onSubmit={handleSubmit} variant="outlined" size="large">Login</Button>
      </form>
    </Container>
  );
}

export default Login;