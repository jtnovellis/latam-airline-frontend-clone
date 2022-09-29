import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = props => {
  const { color = '#e8114b', child = 'Cargando...' } = props;
  return (
    <div className='SpinnerMain__Container'>
      <CircularProgress
        sx={{ color: { color } }}
        className='spinner__element'
      />
      <span className='spinner__text'>{child}</span>
    </div>
  );
};

export default Spinner;
