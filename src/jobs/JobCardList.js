import React from "react"
import JobCard from "./JobCard"
import Grid from '@mui/material/Grid';


const JobCardList = ({ jobs }) => {
  
  return (
    <Grid container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {jobs.map(j => (
        <Grid key={j.id} item xs={3}>
          <JobCard
            title={j.title}
            salary={j.salary}
            id={j.id}
            equity={j.equity}
            company={j.companyName}
            companyHandle={j.companyHandle}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default JobCardList;
