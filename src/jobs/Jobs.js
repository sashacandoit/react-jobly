import React, { useState, useEffect } from "react"
import JoblyApi from "../api";
import JobCard from "./JobCard"
import Grid from '@mui/material/Grid';
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
        <h2 className="Companies-title">Jobs List</h2>
        <Grid container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {jobs.map(j => (
            <Grid item xs={3}>
              <JobCard
                key={j.id}
                title={j.title}
                salary={j.salary}
                id={j.id}
                equity={j.equity}
                company={j.company}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

    </>
  )
}

export default Jobs;