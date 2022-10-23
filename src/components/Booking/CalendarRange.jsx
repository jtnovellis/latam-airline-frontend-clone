import React from 'react';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKING_DATES_ADD } from 'store/reducers/bookingReducer';

const CalendarRange = () => {
  const dispatch = useDispatch();
  const currentDates = useSelector(state => state.bookingReducer.dates);
  function handleChange(newDates) {
    dispatch({ type: BOOKING_DATES_ADD, payload: newDates });
  }
  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      localeText={{
        start: 'Fecha ida',
        end: 'Fecha vuelta',
      }}>
      <DateRangePicker
        value={currentDates}
        onChange={e => handleChange(e)}
        renderInput={(startProps, endProps) => (
          <>
            <TextField
              sx={{ width: '220px', marginLeft: '1rem' }}
              {...startProps}
            />
            <TextField
              sx={{ marginLeft: '1rem', width: '220px' }}
              {...endProps}
            />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default CalendarRange;
