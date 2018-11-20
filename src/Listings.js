import React from 'react';
import PropTypes from 'prop-types';
import Job from './Job';


// createdAt, title, location, type, company, company_logo
const Listings = ({ language, city, listings }) => {
  
  // for each listing map through the objects
  // and store the components in a new jobs array
  console.log({listings})
  const jobs = listings.map((listing, i) => {
    console.log('prop', listing.company_logo)
    return <Job 
      key={i + 'job'} 
      date={listing.created_at} 
      title={listing.title}
      location={listing.location}
      type={listing.type}
      company={listing.company}

      
      
      />
  })
    // and create a Job component for each listing

  //})
  return (
  <div>
    <h3>{`${language} Jobs in ${city}`}</h3>
    {jobs}
  </div>
  );
}



Listings.propTypes = {
  language: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}

export default Listings;