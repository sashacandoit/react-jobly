import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import LoadingSpinner from "../common/LoadingSpinner";
import JobCardList from "../jobs/JobCardList"
import { CssBaseline, Container, Box, Typography } from "@mui/material";
import "./CompanyDetail.css"


const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState([])
  

  useEffect(function getCompanyDetails() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle))
    }
    getCompany();
  }, [handle]);

  //Why does this print, but the data doesn't work in the component?
  console.log(company.jobs)

  if (!company) return <LoadingSpinner />;

  return (
    <>
      <CssBaseline />
      <Container className="CompanyDetail-container">
        <Box className="CompanyDetail-box" sx={{ width: '100%' }}>
          <img
            src={company.logoUrl}
            alt={company.name}
          />
          <Typography variant="h2" gutterBottom>
            {company.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {company.description}
          </Typography>
        </Box>
      </Container>
      <Container className="CompanyDetail-container">
        <Box sx={{ width: '100%' }} className="CompanyDetail-box">
          <Typography variant="h4" color="primary">
            Job Listings
          </Typography>
          {!company.jobs ? <LoadingSpinner /> :
            <JobCardList jobs={company.jobs} />}
        </Box>
        
      </Container>
    </>
  )

}

export default CompanyDetail;