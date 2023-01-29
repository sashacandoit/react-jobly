import React, { useState, useEffect } from "react"
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard"
import { Grid, CssBaseline, Container } from '@mui/material'; 
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
      <Container maxWidth="med">
        <h2 className="Companies-title">Companies List</h2>
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