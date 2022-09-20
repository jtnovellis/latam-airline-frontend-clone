import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const CalendarRange = () => {
  const [value, setValue] = useState([null, null]);
  function handleChange(e) {
    setValue(e);
  }
  console.log(value);
  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      localeText={{
        start: 'Fecha ida',
        end: 'Fecha vuelta',
      }}>
      <DateRangePicker
        value={value}
        onChange={e => handleChange(e)}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default CalendarRange;
