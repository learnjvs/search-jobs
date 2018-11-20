import React from 'react'

const Job = ({ date, title, location, type, company, company_logo }) => {
  // createdAt, title, location, type, company, company_logo
 
  let logo = company_logo ? <img src={company_logo} alt={`${company} logo`} /> : null;

  return (
    <div>
      <ul>
        {logo}
        <li>{title}</li>
        <li>{location}</li>
        <li>{type}</li>
        <li>{company}</li>
        <li>{date}</li>
      </ul>
    </div>
  )
}

export default Job;