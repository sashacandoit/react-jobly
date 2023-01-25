import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const JobDetail = () => {
  const [job, setJob] = useState([])
  const { id } = useParams();

  useEffect(function getJobDetails() {
    async function getJob() {
      setJob(await JoblyApi.getJob(id))
    }
    getJob();
  }, [id]);

  return (
    <>
      <CssBaseline />
      <Container >
        <Box sx={{ width: '100%' }}>
          {/* <img
            src={company.logoUrl}
            alt={company.name}
          /> */}
          <Typography variant="h2" gutterBottom>
            {job.title}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {job.companyName}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {job.salary}
          </Typography>
        </Box>
      </Container>
    </>
  )

}

export default JobDetail;