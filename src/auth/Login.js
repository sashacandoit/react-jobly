import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import "./Login.css"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const Login = ({ login }) => {
  
  const navigate = useNavigate();

  const INITIAL_STATE = { username: "", password: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit (e) {
    e.preventDefault();
    let result = await login(formData)
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
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h2" gutterBottom>
          Login
        </Typography>
      <form className="login-form" onSubmit={handleSubmit}>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            className="login-form-input"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            className="login-form-input"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className="login-form-submit">
            Login
          </button>
      </form>
      </Container>
     </> 
  );
}

export default Login;