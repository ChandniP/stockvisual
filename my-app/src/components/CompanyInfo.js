import React from 'react';

function CompanyInfo(props) {
  return (
    <div className='message-text'>
      <p>Headquarters City: {props.headquartersCity}</p>
      <p>Headquarters State or Country: {props.headquartersStateOrCountry}</p>
      <p>Number of Employees: {props.numberOfEmployees}</p>
      <p>Sector: {props.sector}</p>
      <p>Industry: {props.industry}</p>
    </div>
  );
}

export default CompanyInfo;
