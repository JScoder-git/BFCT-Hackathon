import React, { useState } from 'react';
import '../styles/network.css';
import Example from './Example';

const Network = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateSelect = (stateName) => {
    setSelectedState(stateName);
  };

  return (
    <div>
      <h1>Select Your State</h1>     
     
        <div className='map'>
         <Example />          
        </div>
      
    </div>
  );
};

export default Network;
