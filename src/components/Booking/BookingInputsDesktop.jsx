import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CalendarRange from './CalendarRange';
import { useDispatch } from 'react-redux';
import { BOOKING_CITIES_ADD } from 'store/reducers/bookingReducer';
import { useNavigate } from 'react-router-dom';

function BookingInputsDesktop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='input-desktop-container'>
      <div className='form-container'>
        <Formik
          initialValues={{
            origin: '',
            destination: '',
          }}
          validate={values => {
            const errors = {};
            if (!values.origin) {
              errors.origen = 'Ingrese una ciudad de origen';
            }
            if (!values.destination) {
              errors.destino = 'Ingrese una ciudad de destino';
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            dispatch({ type: BOOKING_CITIES_ADD, payload: values });
            navigate({ pathname: '/flights' });
            resetForm();
          }}>
          {({ isSubmiting }) => (
            <Form>
              <div className='inputs'>
                <div className='input-text-container'>
                  <div className='input'>
                    <Field
                      type='text'
                      name='origin'
                      id='ida'
                      placeholder='Ingresa origen'
                    />
                    <ErrorMessage
                      name='origin'
                      component='div'
                      className='errors'
                    />
                  </div>
                </div>
                <div className='input-text-container-two'>
                  <div className='input'>
                    <Field
                      type='text'
                      name='destination'
                      id='regreso'
                      placeholder='Ingresa destino'
                    />
                    <ErrorMessage
                      name='destination'
                      component='div'
                      className='errors'
                    />
                  </div>
                </div>
                <CalendarRange />
                <div className='btn-submit-search'>
                  <button
                    type='submit'
                    className='btn-buscar'
                    disabled={isSubmiting}>
                    Buscar
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default BookingInputsDesktop;
