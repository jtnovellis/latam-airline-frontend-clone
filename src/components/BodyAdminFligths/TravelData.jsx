import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const DataTravel = () => {
  const [done, setDone] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=' item tt '>
        <h1>Busca tu viaje</h1>
      </div>
      <div className=' item description'>
        <span>Ingresa los datos del viaje.</span>
      </div>
      <Formik
        initialValues={{ order: '', lname: '' }}
        validate={values => {
          const errors = {};
          if (!values.order) {
            errors.order = 'Ingresa un formato válido';
          }
          if (!values.lname) {
            errors.lname = 'Ingresa un formato válido';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          resetForm();
          setDone(true);
          setSubmitting(false);
          setDone(false);
          console.log(values);
        }}>
        {isSubmitting => (
          <Form>
            <div className='item input-div'>
              <Field
                type='text'
                id='order'
                name='order'
                placeholder='N° orden o Código de reserva'
              />
              <ErrorMessage className='errors' name='order' component='div' />
            </div>
            <span
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '1rem',
              }}>
              <Link to='/admin-fligths/travel-data'>Dónde encontrarlos?</Link>
            </span>
            <div className='item input-div'>
              <Field
                onClick={() => setShow(true)}
                type='text'
                id='lname'
                name='lname '
                placeholder='Apellido del pasajero'
              />
              <ErrorMessage className='errors' name='lname' component='div' />
              {show ? (
                <div className='admincard'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30px'
                    height='30px'
                    viewBox='0 0 20 20'
                    fill='none'
                    focusable='false'>
                    <path
                      fill='currentColor'
                      d='M10 .007C4.484.007.007 4.484.007 10S4.484 19.993 10 19.993s9.993-4.477 9.993-9.993S15.516.007 10 .007zM9 6h1.999v1.999H9V6zm0 3.999h1.999v5H9v-5z'></path>
                  </svg>
                  <p>
                    ingresa uno o más apellidos igual{' '}
                    <strong>
                      igual como lo escribiste al comprar el pasaje
                    </strong>
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className=' item button'>
              <button type='submit' onClick={() => isSubmitting}>
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div className=' item lin toShow'>
        <div className='line'>&nbsp;</div>
        <div className='leyend'>O</div>
        <div className='line'>&nbsp;</div>
      </div>
      {done}
      <div className=' item another-option toShow'>
        <Link to={'/admin-fligths'}>Solicitar acceso via email</Link>
      </div>
    </>
  );
};

export default DataTravel;
