import React from 'react';
import Company from './Company';
import CompanyInfo from './CompanyInfo';

function Card(props) {
  
  return (
    <div className='card'>
      <Company name = {props.data.name} symbol = {props.data.symbol}/>  
      <div className='card-main'>
        <CompanyInfo headquartersCity = {props.data.headquartersCity} headquartersStateOrCountry = {props.data.headquartersStateOrCountry} numberOfEmployees = {props.data.numberOfEmployees} sector = {props.data.sector} industry = {props.data.industry}/>
      </div>
    </div>
  );
}

export default Card;
