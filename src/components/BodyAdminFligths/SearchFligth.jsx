import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import MyTrips from 'components/DataUser/MyTrips';

const SearchFligth = () => {
  const [done, setDone] = useState(false);
  const [noLoginEmail, setNoLoginEmail] = useState(null);
  const [show, setShow] = useState(false);

  if (show) return <MyTrips noLoginEmail={noLoginEmail} />;
  return (
    <div className='myAccount__bodyContainer-section-search'>
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
        onSubmit={({ email }, { setSubmitting, resetForm }) => {
          setNoLoginEmail(email);
          resetForm();

          setDone(true);
          setSubmitting(false);
          setDone(false);
          setShow(true);
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

      {done}
    </div>
  );
};

export default SearchFligth;
