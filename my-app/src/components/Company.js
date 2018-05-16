import React from 'react';

function Company(props) {
  return (
    <div className='user'>
      <i className='fa fa-user-o'/>
      <p>{props.name}</p>
      <p>{props.symbol}</p>
    </div>
  );
}

export default Company;