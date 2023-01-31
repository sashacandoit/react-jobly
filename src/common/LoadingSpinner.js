import React from "react";
import { Spinner } from "reactstrap";
import { Container, Box, Typography } from "@mui/material"
import "./LoadingSpinner.css"

/** Loading message used by components that fetch API data. */

const LoadingSpinner = () => {
  return (
    <Container className="LoadingSpinner-container">
      <Box className="LoadingSpinner-box">
        <Spinner
          color="primary"
          type="grow"
        >
        </Spinner>
        <span className="LoadingSpinner-loading">
          <Typography variant="h5" color="primary">
            {' '}Loading ...
          </Typography>
          
        </span>
      </Box>
    </Container>
  )
}

export default LoadingSpinner;