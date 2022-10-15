import React from 'react';
import LuggageCard from './LuggageCard';
const FullLuggageCard = props => {
  return (
    <div>
      {props.selected ? (
        <LuggageCard types='departure' select='departure' />
      ) : (
        <LuggageCard types='arrival' select='arrival' />
      )}
    </div>
  );
};

export default FullLuggageCard;
