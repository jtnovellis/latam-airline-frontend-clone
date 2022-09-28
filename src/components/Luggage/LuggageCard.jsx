import React from 'react';
import LuggageButtons from './LuggageButtons';
const LuggageCard = () => {
  const action = 'lightIncrement';

  return (
    <div>
      <LuggageButtons name='jairo' action={action} />
    </div>
  );
};

export default LuggageCard;
