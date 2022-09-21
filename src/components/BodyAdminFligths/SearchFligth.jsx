import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
const SearchFligth = () => {
  const [done, setDone] = useState(false);
  return (
    <>
      <div className=' item tt '>
        <h1>Busca tu viaje</h1>
      </div>
      <div className=' item description'>
        <span>Ingresa el email con el que realizaste tu compra.</span>
      </div>
      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Tienes que ingresar un email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email =
              'Tienes que ingresar un email válido. El formato correcto es tucorreo@correo.com';
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
              <Field type='email' id='email' name='email' placeholder='Email' />
              <ErrorMessage className='errors' name='email' component='div' />
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
        <Link to={'travel-data'}>Ingresa con los datos de tu viaje</Link>
      </div>
    </>
  );
};

export default SearchFligth;
