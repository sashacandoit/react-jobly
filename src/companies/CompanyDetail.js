import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const CompanyDetail = () => {
  const [company, setCompany] = useState([])
  const { handle } = useParams();

  useEffect(function getCompanyDetails() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle))
    }
    getCompany();
  }, [handle]);

  return (
    <>
      <CssBaseline />
      <Container >
        <Box sx={{ width: '100%' }}>
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
    </>
  )

}

export default CompanyDetail;