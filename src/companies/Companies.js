import React, { useState, useEffect } from "react"
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard"
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
    <div className="Companies">
      <h2 className="Companies-title">Companies List</h2>
      <div className="Companies-cards">
        {companies.map(c => (
          <CompanyCard
            key={c.handle}
            name={c.name}
            handle={c.handle}
            description={c.description}
            logoUrl={c.logoUrl}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Companies;