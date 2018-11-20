import React from 'react'

const Job = ({ date, title, location, type, company }) => {
  // createdAt, title, location, type, company, company_logo
  console.log({date})
  return (
    <div>
      <ul>
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