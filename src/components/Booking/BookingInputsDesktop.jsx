import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CalendarRange from './CalendarRange';

function BookingInputsDesktop() {
  return (
    <div className='input-desktop-container'>
      <div className='form-container'>
        <Formik
          initialValues={{
            origen: '',
            destino: '',
            dateIda: '',
            dateVuelta: '',
          }}
          validate={values => {
            const errors = {};
            if (!values.origen) {
              errors.origen = 'Ingrese una ciudad de origen';
            }
            if (!values.destino) {
              errors.destino = 'Ingrese una ciudad de destino';
            }
            if (!values.dateIda) {
              errors.dateIda = 'Ingrese una fecha de partida';
            }
            if (!values.dateVuelta) {
              errors.dateVuelta = 'Ingrese una fecha de regreso';
            } else if (!(values.dateVuelta > values.dateIda)) {
              errors.dateVuelta =
                'No puede viajar hacia el pasado, ingrese una fecha de regreso válida';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmiting, resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmiting(false);
          }}>
          {({ isSubmiting }) => (
            <Form>
              <div className='inputs'>
                <div className='input-text-container'>
                  <div className='input'>
                    <Field
                      type='text'
                      name='origen'
                      id='ida'
                      placeholder='Ingresa origen'
                    />
                    <ErrorMessage
                      name='origen'
                      component='div'
                      className='errors'
                    />
                  </div>
                </div>
                <div className='input-text-container-two'>
                  <div className='input'>
                    <Field
                      type='text'
                      name='destino'
                      id='regreso'
                      placeholder='Ingresa destino'
                    />
                    <ErrorMessage
                      name='destino'
                      component='div'
                      className='errors'
                    />
                  </div>
                </div>
                <CalendarRange />
                {/* <div className='input-date-container'>
                  <div className='dates'>
                  <div className='input-ida'>
                  <Field type='date' name='dateIda' id='fecha-ida' />
                  </div>
                  <div className='input-vuelta'>
                  <Field type='date' name='dateVuelta' id='fecha-regreso' />
                  </div>
                  </div>
                  <ErrorMessage
                  name='dateIda'
                  component='div'
                  className='errors'
                  />
                  <ErrorMessage
                  name='dateVuelta'
                  component='div'
                  className='errors'
                  />
                </div> */}
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
