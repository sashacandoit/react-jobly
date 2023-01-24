import React, { useState, useEffect } from "react"
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard"
import Grid from '@mui/material/Grid'; 
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';



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
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {companies.map(c => (
            <Grid xs={3}>
              <CompanyCard
                key={c.handle}
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