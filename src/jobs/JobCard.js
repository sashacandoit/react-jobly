import React, { useContext, useState } from "react";
import UserContext from "../auth/UserContext"
import "./JobCard.css"
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';


const JobCard = ({ id, title, salary, equity, company, companyHandle }) => {

  const { hasApplied, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  React.useEffect(function updateAppliedStatus() {
    setApplied(hasApplied(id));
  }, [id, hasApplied]);

  async function handleApply(e) {
    if (hasApplied(id)) {
      return;
    }
    applyToJob(id);
    setApplied(true);
  }
  

  const applyButton = () => {
    return (
      <Button
        color="primary"
        onClick={handleApply}
      >
        Apply!
      </Button>
    )
  }

  const alreadyApplied = () => {
    return (
      <Button disabled >
        Already Applied
      </Button>
    )
  }

  return (
    <Card sx={{ minWidth: 25 }} className="JobCard">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="overline">
          {company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Salary: {salary} | Equity: {equity}
        </Typography>
      </CardContent>
      <CardActions>
        {applied ? alreadyApplied() : applyButton()}
      </CardActions>
    </Card>
  )
}

export default JobCard;