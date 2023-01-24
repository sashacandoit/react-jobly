import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css"

/** Is rendered by CompanyList to show a "card" for each company
 *
 * CompanyList -> CompanyCard
 * 
 */

const CompanyCard = ({ name, description, logoUrl, handle }) => {
  console.log(logoUrl)
  return (
    <Link to={`/companies/${handle}`} className="CompanyCard">
      <div className="CompanyCard-card">
        <h5 className="CompanyCard-title">{name}</h5>
        <img className="CompanyCard-img" src={`${logoUrl}`} alt={name} />
        <p className="CompanyCard-info">{description}</p>
      </div>
    </Link>
  )
}

export default CompanyCard;