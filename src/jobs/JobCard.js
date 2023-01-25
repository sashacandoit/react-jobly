import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const JobCard = ({ id, title, salary, equity, company, companyHandle }) => {
  return (
    <Card sx={{ minWidth: 25 }}>
      <CardContent>
        {/* <CardMedia
          component="img"
          height="150"
          image={company.logoUrl}
          alt={company.name}
        /> */}
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2">
          {salary}
        </Typography>
        
        <Link to={`/companies/${companyHandle}`}>
          <Typography variant="body2">
            {company}
          </Typography>
        </Link>
        
      </CardContent>
    </Card>
  )
}

export default JobCard;