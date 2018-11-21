import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import JobDescription from './JobDescription';

const Job = ({ date, title, location, type, company, company_logo, description }) => {
  // createdAt, title, location, type, company, company_logo
 
  let logo = company_logo ? <img src={company_logo} alt={`${company} logo`} /> : null;

  return (
    <div>
      <ul id="shortDescription">
        {logo}
        <li>{title}</li>
        <li>{location}</li>
        <li>{type}</li>
        <li>{company}</li>
        <li>{date}</li>
        <li>{ReactHtmlParser(description)}</li>
        {/* <JobDescription /> */}
      </ul>
    </div>
  )
}

export default Job;