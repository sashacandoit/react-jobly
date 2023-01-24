import React, { useState, useEffect } from "react"
import JoblyApi from "../api";

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
    <div>
      Companies List
      {companies.map(company => (company.name))}
    </div>
  )
}

export default Companies;