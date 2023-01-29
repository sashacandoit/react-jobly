import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import "./CompanyCard.css"

/** Is rendered by CompanyList to show a "card" for each company
 *
 * CompanyList -> CompanyCard
 * 
 */

const CompanyCard = ({ name, description, logoUrl, handle }) => {
  return (
    <Link to={`/companies/${handle}`} className="CompanyCard">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CardMedia
            component="img"
            height="150"
            image={logoUrl}
            alt={name}
          />
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CompanyCard;