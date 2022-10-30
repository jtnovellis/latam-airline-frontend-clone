import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const CenteredSpinner = props => {
  const { color = '#e8114b', child = 'Cargando...' } = props;
  return (
    <div className='CenteredSpinnerMain__Container'>
      <CircularProgress
        sx={{ color: { color } }}
        className='CenteredSpinner__element'
      />
      <span className='CenteredSpinner__text'>{child}</span>
    </div>
  );
};

export default CenteredSpinner;
