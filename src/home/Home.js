import React, { useContext } from "react"
import UserContext from "../auth/UserContext";
import { Container, Col, Row, Button } from 'reactstrap';
import "./Home.css"


const Home = () => {
  const { currentUser } = useContext(UserContext);

  const loggedInHome = () => {
    return (
      <Col className="home-col">
        <h1 className="home-title">Logged In Homepage</h1>
        <Row className="home-button-row">
          <Col className="home-button-col">
            <Button className="home-button" href="/companies" color="primary" size="lg" outline>
              Companies
            </Button>
          </Col>
          <Col className="home-button-col">
            <Button className="home-button" href="/jobs" color="primary" size="lg" outline>
              Jobs
            </Button>
          </Col>
        </Row>
      </Col>
    )
  }

  const loggedOutHome = () => {
    return (
      <Col className="home-col">
        <h1 className="home-title">Logged Out Homepage</h1>
        <Row className="home-button-row">
          <Col className="home-button-col">
            <Button className="home-button" href="/login" color="primary" size="lg" outline>
              Login
            </Button>
          </Col>
          <Col className="home-button-col">
            <Button className="home-button" href="/signup" color="primary" size="lg" outline>
              Register
            </Button>
          </Col>
        </Row>
      </Col>
    )
  }

  return (
    <Container className="home-container">
      <Row className="home-row">
        {currentUser ? loggedInHome() : loggedOutHome()}
      </Row>
    </Container>
  )
}

export default Home;