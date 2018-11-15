import React from 'react';
import PropTypes from 'prop-types';

const Result = ({language, city}) => (
  <div>
    <h3>{`Jobs using ${language} in ${city}`}</h3>
  </div>

)



Result.proptTypes = {

}
export default Result;