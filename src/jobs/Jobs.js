import React, { useState, useEffect } from "react"
import JoblyApi from "../api";
import JobCardList from "./JobCardList"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


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
      <Container maxWidth="med">
        <h2>Jobs List</h2>
        <JobCardList jobs={jobs} />
      </Container>
    </>
  )
}

export default Jobs;