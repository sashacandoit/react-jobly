import React, { useContext } from "react";
import UserContext from "../auth/UserContext"
import "./JobCard.css"
import { Card, CardContent, Typography, Button, Chip, CardActions } from '@mui/material';


const JobCard = ({ id, title, salary, equity, company, companyHandle }) => {
  // console.debug("JobCard", "job=", title);
  const { hasApplied, applyToJob } = useContext(UserContext);

  const applyButton = () => {
    return (
      <Button size="small" color="primary">
        Apply!
      </Button>
    )
  }

  const alreadyApplied = () => {
    return (
      <Chip variant="outline" color="success">
        Applied
      </Chip>
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
        <Button size="small" color="primary">
          Apply!
        </Button>
      </CardActions>
    </Card>
  )
}

export default JobCard;