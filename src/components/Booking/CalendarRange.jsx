import React from 'react';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKING_DATES_ADD } from 'store/reducers/bookingReducer';

const CalendarRange = () => {
  const dispatch = useDispatch();
  const dates = useSelector(state => state.bookingReducer.dates);
  function handleChange(e) {
    dispatch({ type: BOOKING_DATES_ADD, payload: e });
  }
  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      localeText={{
        start: 'Fecha ida',
        end: 'Fecha vuelta',
      }}>
      <DateRangePicker
        value={dates}
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
