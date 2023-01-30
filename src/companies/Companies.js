import React, { useState, useEffect } from "react"
import JoblyApi from "../api";
import SearchForm from "../common/SearchForm"

import CompanyCard from "./CompanyCard"
import { Grid, CssBaseline, Container, Box, Typography } from '@mui/material'; 
import "./Companies.css"

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompaniesOnMount() {
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  return (
    <>
      <CssBaseline />
      <Container className="Companies-container" maxWidth="med">
        <Box className="Companies-header">
          <Typography variant="h2">
            Companies List
          </Typography>
        </Box>
        <SearchForm searchFor={search} />
        <Grid container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {companies.map(c => (
            <Grid key={c.handle} item xs={3}>
              <CompanyCard
                name={c.name}
                handle={c.handle}
                description={c.description}
                logoUrl={c.logoUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </>
  )
}

export default Companies;