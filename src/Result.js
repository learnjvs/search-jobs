import React from 'react';
import PropTypes from 'prop-types';


const Result = ({ language, city, result }) => {
  
  return (
  <div>
    <h3>{`Jobs using ${language} in ${city}`}</h3>
    {JSON.stringify(result)}
    <div>

    </div>
  </div>
  );
}



Result.propTypes = {
  language: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
}

export default Result;