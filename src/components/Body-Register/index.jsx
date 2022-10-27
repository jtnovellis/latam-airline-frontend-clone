import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import useGetCookies from '../../services/Cookies/useGetCookies';
import useRemoveCookies from '../../services/Cookies/useRemoveCookies';
import useSetCookies from '../../services/Cookies/useSetCookies';
import {
  SET_USER_LOGIN,
  SET_ALL_DATAUSER,
} from '../../store/reducers/userReducer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const index = () => {
  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getDataUser = () => {
    axios
      // eslint-disable-next-line no-undef
      .get(`${process.env.REACT_APP_API_LATAM_CLONE}/api/users/data`, {
        headers: {
          Authorization: `Bearer ${useGetCookies('lausrin')}`,
        },
      })
      .then(res => {
        dispatch({ type: SET_ALL_DATAUSER, payload: res.data.data.user });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className='section__div'>
        <div className='main-container'>
          <div className='tt'>
            <h1
              style={{
                fontFamily: 'LATAM Sans',
                fontSize: '32px',
                fontWeight: '100',
                fontStyle: 'italic',
                color: '#1B0088',
                textAlign: 'start',
              }}>
              {' '}
              Crear cuenta{' '}
            </h1>
          </div>
          <div className='paragraph'>
            <p>
              {' '}
              Si ya eres parte de LATAM, no necesitas crear una cuenta nueva.{' '}
              <a href=''>Inicia sesión </a>
              con tus datos de siempre.{' '}
            </p>
          </div>
          <div className='tt'>
            <h2
              style={{
                fontFamily: 'LATAM Sans',
                fontSize: '24px',
                fontWeight: '400',
                color: '#1B0088',
                textAlign: 'start',
              }}>
              {' '}
              Datos personales{' '}
            </h2>
          </div>
          <div className='paragraph'>
            <p>
              Ingresa tus datos{' '}
              <strong>tal como aparecen en tu documento de identidad</strong>.
              Los usaremos cuando compres tus pasajes.
            </p>
          </div>

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              birthdate: '',
              gender: '',
              country: 'Colombia',
              documentType: 'Cédula de ciudadanía',
              documentNumber: '',
              email: '',
              password: '',
              passportCountry: 'Colombia',
              countryNumber: '+57',
              number: '',
              terms: '',
              dataTreatment: '',
              countryPP: 'Colombia',
            }}
            validate={values => {
              const errors = {};
              if (!values.firstName) {
                errors.firstName =
                  'Tienes que ingresar el o los nombres tal como aparecen en tu cédula de ciudadanía';
              } else if (values.firstName.length < 4) {
                errors.firstName = 'ingresa al menos 4 caracteres';
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.firstName)) {
                errors.firstName =
                  'el nombre solo puede contener letras y espacios';
              }
              if (!values.email) {
                errors.email = 'Tienes que ingresar un email';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email =
                  'Tienes que ingresar un email válido. El formato correcto es tucorreo@correo.com';
              }
              if (!values.password) {
                errors.password = 'Por favor ingresa una contraseña';
              } else if (values.password.length < 8) {
                errors.password =
                  'Tienes que ingresar una contraseña que tenga mínimo 8 caracteres e incluir una mayúscula, una minúscula y un número';
              }
              if (!values.documentType) {
                errors.documentType =
                  'Tienes que ingresar un número de cédula de ciudadanía. Ejemplo: 1234567891';
              } else if (values.documentType.length < 7) {
                errors.documentType =
                  'Tienes que ingresar un número de cédula de ciudadanía. Ejemplo: 1234567891';
              } else if (!/^\d+$/i.test(values.documentNumber)) {
                errors.documentNumber =
                  'Solo se aceptan valores numéricos. Ejemplo: 1234567891';
              }
              if (!values.birthdate) {
                errors.birthdate = 'La fecha es inválida';
              }
              if (!values.number) {
                errors.number = 'Tienes que ingresar el número de celular';
              } else if (values.number.length < 9) {
                errors.number =
                  'Tienes que ingresar un celular con 9 números como mínimo.';
              }
              if (!values.terms) {
                errors.terms =
                  'Tienes que aceptar los Términos y condiciones del Programa LATAM Pass y los Términos y condiciones de la cuenta LATAM.';
              }
              if (!values.dataTreatment) {
                errors.dataTreatment =
                  'Tienes que aceptar la Política de Privacidad.';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              axios
                .post(
                  // eslint-disable-next-line no-undef
                  `${process.env.REACT_APP_API_LATAM_CLONE}/api/auth/local/signup`,
                  { ...values, isRegistered: true }
                )
                .then(function (res) {
                  useRemoveCookies('lausrin');
                  useSetCookies('lausrin', res.data.data.token);
                  dispatch({ type: SET_USER_LOGIN });
                })
                .catch(function () {
                  navigate({ pathname: '/register' });
                })
                .finally(() => {
                  getDataUser();
                  resetForm();
                  setDone(true);
                  setSubmitting(false);
                  setDone(false);
                  window.location.assign('https://latamairlines.vercel.app/');
                });
            }}>
            {({ isSubmitting, errors, values }) => (
              <Form>
                <div className='select-field'>
                  <label>País</label>
                  <Field as='select' id='country' name='country'>
                    <option value='Colombia'>Colombia</option>
                  </Field>
                </div>
                <div className='select-field id'>
                  <label>Tipo de documento</label>
                  <Field as='select' id='documentType' name='documentType'>
                    <option value='Cedula de ciudadanía'>
                      Cedula de ciudadanía
                    </option>
                    <option value='Pasaporte'>Pasaporte</option>
                  </Field>
                  <span>
                    Te recomendamos registrarte con tu cédula de ciudadanía de
                    Colombia
                  </span>
                </div>

                {values.id === 'Pasaporte' ? (
                  <>
                    <div className='select-field pp'>
                      <label>País de emisión del pasaporte</label>
                      <Field as='select' id='countryPP' name='countryPP'>
                        <option value='Colombia'>Colombia</option>
                      </Field>
                    </div>
                    <div className='input-field'>
                      <Field
                        type='input'
                        id='documentNumber'
                        name='documentNumber'
                        placeholder='Numero de pasaporte'
                      />
                      {errors.documentNumber ? (
                        <ErrorMessage
                          className='errors'
                          name='documentNumber'
                          component='div'
                        />
                      ) : (
                        <span>Ejemplo: 1.234.567.891</span>
                      )}
                    </div>
                  </>
                ) : (
                  <div className='input-field'>
                    <Field
                      type='input'
                      id='documentNumber'
                      name='documentNumber'
                      placeholder='Numero de cedula de ciudadanía'
                    />
                    {errors.documentNumber ? (
                      <ErrorMessage
                        className='errors'
                        name='documentNumber'
                        component='div'
                      />
                    ) : (
                      <span>Ejemplo: 1.234.567.891</span>
                    )}
                  </div>
                )}
                <div className='input-field'>
                  <Field
                    type='input'
                    id='firstName'
                    name='firstName'
                    placeholder='Nombre(s)'
                  />

                  {errors.firstName ? (
                    <ErrorMessage
                      className='errors'
                      name='firstName'
                      component='div'
                    />
                  ) : (
                    <span>Tal como aparece(n) en tu cédula de ciudadanía</span>
                  )}
                </div>
                <div className='input-field'>
                  <Field
                    type='input'
                    id='lastName'
                    name='lastName'
                    placeholder='Apellidos'
                  />
                  <span>Tal como aparecen en tu cédula de ciudadanía</span>
                </div>
                <div className='input-fieldBD'>
                  <label>Fecha de nacimiento</label>
                  <Field
                    type='date'
                    id='birthdate'
                    name='birthdate'
                    placeholder='Ingresa tu fecha de nacimiento'
                  />
                  <ErrorMessage
                    className='errors'
                    name='birthdate'
                    component='div'
                  />
                </div>
                <div className='gender' id='my-radio-group'>
                  <h3
                    style={{
                      fontFamily: 'LATAM Sans',
                      fontSize: '20px',
                      fontWeight: '400',
                      color: '#1B0088',
                      textAlign: 'start',
                    }}>
                    {' '}
                    Género{' '}
                  </h3>
                </div>
                <div
                  className='gender-radio'
                  role='group'
                  aria-labelledby='my-radio-group'>
                  <label>
                    <Field type='radio' name='gender' value='Male' />
                    Masculino
                  </label>
                  <label>
                    <Field type='radio' name='gender' value='Female' />
                    Femenino
                  </label>
                  <label>
                    <Field type='radio' name='gender' value='ND' />
                    Prefiero no decirlo
                  </label>
                </div>
                <div className='number-selection'>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'LATAM Sans',
                        fontSize: '20px',
                        fontWeight: '400',
                        color: '#1B0088',
                        textAlign: 'start',
                      }}>
                      {' '}
                      Número de celular{' '}
                    </h4>
                  </div>
                  <div className='select-number-split'>
                    <div className='select-number'>
                      <div className='select-field'>
                        <label>País</label>
                        <Field
                          id='countryNumber'
                          as='select'
                          name='countryNumber'
                          multiple={false}>
                          <option value='Colombia'>+57</option>
                        </Field>
                      </div>

                      <div className='input-field'>
                        <Field
                          type='text'
                          id='number'
                          name='number'
                          placeholder='Número de celular'
                        />
                        <ErrorMessage
                          className='errors'
                          name='number'
                          component='div'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='login-data'>
                  <div className='tt '>
                    <h5
                      style={{
                        fontFamily: 'LATAM Sans',
                        fontSize: '23px',
                        fontWeight: '400',
                        color: '#1B0088',
                        textAlign: 'start',
                      }}>
                      {' '}
                      Datos de ingreso a tu cuenta{' '}
                    </h5>
                  </div>
                  <p>
                    <strong>Prefiere tu email personal</strong> para asegurar
                    que recibas nuestra comunicación.
                  </p>
                  <div className='login-div'>
                    <div className='input-field'>
                      <Field
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                      />
                      <ErrorMessage
                        className='errors'
                        name='email'
                        component='div'
                      />
                    </div>
                    <div className='input-field'>
                      <Field
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Contraseña'
                      />
                      <ErrorMessage
                        className='errors'
                        name='password'
                        component='div'
                      />
                    </div>
                  </div>
                  <div className='requeriments'>
                    <p>Tu contraseña necesita tener mínimo:</p>
                    <ul>
                      <div className='requeriment'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16px'
                          height='16px'
                          viewBox='0 0 20 20'
                          fill='none'
                          focusable='false'>
                          <path
                            fill='currentColor'
                            d='M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z'></path>
                        </svg>
                        <li>1 mayúscula</li>
                      </div>
                      <div className='requeriment'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16px'
                          height='16px'
                          viewBox='0 0 20 20'
                          fill='none'
                          focusable='false'>
                          <path
                            fill='currentColor'
                            d='M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z'></path>
                        </svg>
                        <li>1 minúscula</li>
                      </div>
                      <div className='requeriment'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16px'
                          height='16px'
                          viewBox='0 0 20 20'
                          fill='none'
                          focusable='false'>
                          <path
                            fill='currentColor'
                            d='M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z'></path>
                        </svg>
                        <li>1 número</li>
                      </div>
                      <div className='requeriment'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16px'
                          height='16px'
                          viewBox='0 0 20 20'
                          fill='none'
                          focusable='false'>
                          <path
                            fill='currentColor'
                            d='M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z'></path>
                        </svg>
                        <li>8 caracteres</li>
                      </div>
                    </ul>
                  </div>

                  <div
                    className='check-login'
                    role='group'
                    aria-labelledby='checkbox-group'>
                    <label>
                      <Field
                        as='input'
                        type='checkbox'
                        id='terms'
                        name='terms'
                        value='terms'
                      />
                      <p>
                        Acepto los{' '}
                        <a href='/'>
                          Términos y condiciones del programa LATAM pass
                        </a>{' '}
                        Y los{' '}
                        <a href='/'>
                          Términos y condiciones de la cuenta LATAM
                        </a>
                      </p>
                    </label>
                    <ErrorMessage
                      className='errors'
                      name='terms'
                      component='div'
                    />
                    <label>
                      <Field
                        as='input'
                        type='checkbox'
                        id='dataTreatment'
                        name='dataTreatment'
                        value='data'
                      />
                      <p>
                        Autorizo que mis datos sean tratados de acuerdo a la{' '}
                        <a href='/'>Política de privacidad</a>
                      </p>
                    </label>
                    <ErrorMessage
                      className='errors'
                      name='dataTreatment'
                      component='div'
                    />
                  </div>
                </div>

                <div>
                  <div
                    className='dropdown-data-treatment'
                    onClick={() =>
                      checked ? setChecked(false) : setChecked(true)
                    }>
                    <div className='dropdown-title'>
                      <span>Sobre el tratamiento de datos</span>
                    </div>
                    <div className='dropdown-svg'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20px'
                        height='20px'
                        viewBox='0 0 20 20'
                        fill='none'
                        focusable='false'>
                        <path
                          fill='currentColor'
                          d='M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z'
                        />
                      </svg>
                    </div>
                  </div>
                  {checked ? (
                    <div className='message'>
                      <ul>
                        <li>
                          Los responsables del tratamiento de los datos son las
                          compañías que forman LATAM Airlines Group S.A.
                        </li>
                        <li>
                          Tus datos serán usados para: la gestión contractual y
                          el cobro del servicio, la gestión de LATAM Pass;
                          realizar análisis de satisfacción, auditorías, mejora
                          del servicio y prevención del fraude; atender quejas,
                          reclamaciones o sugerencias; el envío de
                          comunicaciones comerciales, relativas a productos y
                          servicios de LATAM.com, y procesos de selección.
                        </li>
                        <li>
                          Los destinatarios son: aeropuertos, autoridades
                          gubernamentales, organismos de Fuerzas y Cuerpos de
                          Seguridad, agentes de viajes u otras empresas que
                          realicen reservas de vuelos con LATAM, empresas de
                          tarjetas de crédito y débito.
                        </li>
                        <li>
                          Tienes derecho de acceso, rectificación, cancelación,
                          oposición, limitación y portabilidad.
                        </li>
                        <li>
                          Legitimación: Ejecución de contrato. Interés legítimo.
                          Obligación legal. Consentimiento.
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}
                  <hr />
                  <div>
                    <button
                      className='btn-create'
                      type='submit'
                      disabled={isSubmitting}>
                      Crear cuenta
                    </button>
                    {done && <p>Usuario creado correctamente</p>}
                  </div>
                  <p className='captcha latam-form-p'>
                    Este sitio es protegido por reCAPTCHA y se aplica a las{' '}
                    <a href='/'>Politicas de Privacidad</a> y a los{' '}
                    <a href='/'>Términos de Servicio</a> de Google.
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default index;
