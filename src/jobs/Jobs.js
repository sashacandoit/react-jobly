import React, { useState, useEffect } from "react"
import JoblyApi from "../api";
import "./Jobs.css"
import JobCardList from "./JobCardList"
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
import { Typography, Box, Container, CssBaseline } from "@mui/material";


const Jobs = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(function getJobsOnMount() {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  return (
    <>
      <CssBaseline />
      <Container className="Jobs-container" maxWidth="med">
        <Box className="Jobs-header">
          <Typography variant="h2">
            Jobs List
          </Typography>
        </Box>
        <Box className="Jobs-card-list">
          <JobCardList jobs={jobs} />
        </Box>
        
      </Container>
    </>
  )
}

export default Jobs;