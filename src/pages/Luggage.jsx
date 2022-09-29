import React from 'react';
import LuggageCard from '../components/Luggage/LuggageCard';
const Luggage = () => {
  return (
    <>
      <LuggageCard types='departure' />
      <LuggageCard types='arrival' />
    </>
  );
};

export default Luggage;
