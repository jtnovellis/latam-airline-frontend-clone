import React from 'react';
import logo from '../images/login/logo_latam.png';
import '../scss/pages/Login.scss';
import '../scss/base/Fontfaces.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function login() {
  const [done, setDone] = useState(false);
  return (
    <div className='window-login'>
      <div className='background-container-login'>
        <div className='container-login'>
          <div>
            <a href='./home.jsx'>
              <img src={logo} className='logo' alt='logo' />{' '}
            </a>
          </div>
          <h1>Inicia sesión</h1>
          <div>
            <Formik
              initialValues={{ name: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.name) {
                  errors.name = 'required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
                ) {
                  errors.name = 'invalid Email';
                }
                if (!values.password) {
                  errors.password = 'required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                resetForm();
                setDone(true);
                setTimeout(() => {
                  setSubmitting(true);
                  setDone(true);
                }, 1000);
              }}>
              {({ isSubmitting }) => (
                <Form>
                  <p>Si ya eres parte de LATAM, ingresa tus datos.</p>
                  <div className='input-login'>
                    <label htmlFor='name'></label>
                    <Field
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Email o número de socio '
                    />
                    <ErrorMessage
                      className='errors'
                      name='name'
                      component='div'
                    />
                  </div>

                  <div className='input-login'>
                    <label htmlFor='password'></label>
                    <Field
                      type='password'
                      id='password'
                      name='password'
                      placeholder='password'
                    />
                    <ErrorMessage
                      className='errors'
                      name='password'
                      component='div'
                    />
                  </div>
                  <div>
                    <p className='recuperar'>
                      <a href=''>
                        <strong>recupera el acceso a tu cuenta </strong>{' '}
                      </a>
                    </p>
                    <button type='submit' disabled={isSubmitting}>
                      Iniciar sesión
                    </button>
                    {done}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className='resgister'>
        <p className='register-p'>
          ¿No estás registrado? <Link to='/register'>Crea una cuenta </Link>
        </p>
      </div>
    </div>
  );
}

export default login;
