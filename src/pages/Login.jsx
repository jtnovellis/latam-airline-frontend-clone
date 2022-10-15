import React, { useState } from 'react';
import logo from '../images/login/logo_latam.png';
import '../scss/pages/Login.scss';
import '../scss/base/Fontfaces.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSetCookies from '../services/Cookies/useSetCookies';
import useGetCookies from '../services/Cookies/useGetCookies';
import useRemoveCookies from '../services/Cookies/useRemoveCookies';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  SET_USER_LOGIN,
  SET_ALL_DATAUSER,
} from '../store/reducers/userReducer';

function login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const getDataUser = () => {
    axios
      // eslint-disable-next-line no-undef
      .get(`${process.env.REACT_APP_API_LATAM_CLONE}/api/users/data`, {
        headers: {
          Authorization: `Bearer ${useGetCookies('lausrin')}`,
        },
      })
      .then(res => {
        const { data } = res;
        dispatch({ type: SET_ALL_DATAUSER, payload: data.data });
      })
      .catch(err => {
        setError(err);
      });
  };

  return (
    <div>
      <div className='window-login'>
        <div className='background-container-login'>
          <div className='container-login'>
            <div>
              <Link to='/'>
                <img src={logo} className='logo' alt='logo' />{' '}
              </Link>
            </div>
            <h1>Inicia sesión</h1>
            <div>
              <Formik
                initialValues={{ name: '', password: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.name
                    )
                  ) {
                    errors.name = 'Invalid Email';
                  }
                  if (!values.password) {
                    errors.password = 'Required';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  axios
                    .post(
                      // eslint-disable-next-line no-undef
                      `${process.env.REACT_APP_API_LATAM_CLONE}/api/auth/local/signin`,
                      {
                        email: values.name,
                        password: values.password,
                      }
                    )
                    .then(res => {
                      useRemoveCookies('lausrin');
                      useSetCookies('lausrin', res.data.data.token);
                      dispatch({ type: SET_USER_LOGIN });
                    })
                    .catch(() => {
                      navigate({ pathname: '/login' });
                    })
                    .finally(() => {
                      setSubmitting(true);
                      resetForm();
                      getDataUser();
                      navigate({ pathname: '/' });
                    });
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
                        placeholder='Email '
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
                        placeholder='Password'
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
                          <strong>Recupera el acceso a tu cuenta </strong>{' '}
                        </a>
                      </p>

                      <button type='submit' disabled={isSubmitting}>
                        Iniciar sesión
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className='resgister-login'>
          <p className='register-p'>
            ¿No estás registrado? <Link to='/register'>Crea una cuenta </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default login;
