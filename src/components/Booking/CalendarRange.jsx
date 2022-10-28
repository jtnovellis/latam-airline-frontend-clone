import React from 'react';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKING_DATES_ADD } from 'store/reducers/bookingReducer';

const CalendarRange = () => {
  const dispatch = useDispatch();
  const { dates: currentDates, roundTrip } = useSelector(
    state => state.bookingReducer
  );
  function handleChange(newDates) {
    dispatch({ type: BOOKING_DATES_ADD, payload: newDates });
  }

  const hsndleMarginLeft = () => {
    if (roundTrip) return '1rem';
    return '100px';
  };
  const hsndleMarginRight = () => {
    if (roundTrip) return '0px';
    return '110px';
  };
  const handleWidth = () => {
    if (roundTrip) return '220px';
    return '270px';
  };
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
              sx={{
                width: handleWidth(),
                marginLeft: hsndleMarginLeft(),
                marginRight: hsndleMarginRight(),
              }}
              {...startProps}
            />
            {roundTrip && (
              <TextField
                sx={{ marginLeft: '1rem', width: '220px' }}
                {...endProps}
              />
            )}
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default CalendarRange;
