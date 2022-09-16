import React from 'react'
//import Titles from '../components/Body-Register/Titles'
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const index = () => {
  const [done, setDone] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className='section__div'>
        <div className='main-container'>


          <div className='title tt'>
            <h1 style={{
              fontFamily: 'LATAM Sans',
              fontSize: '32px',
              fontWeight: '100',
              fontStyle: 'italic',
              color: '#1B0088',
              textAlign: 'start',
            }}> Crear cuenta </h1>
          </div>
          <div className='paragraph'>
            <p> Si ya eres parte de LATAM,
              no necesitas crear una cuenta nueva. <a href="">Inicia sesión </a>
              con tus datos de siempre. </p>
          </div>
          <div className='title tt'>
            <h2 style={{
              fontFamily: 'LATAM Sans',
              fontSize: '24px',
              fontWeight: '400',
              color: '#1B0088',
              textAlign: 'start',
            }}> Datos personales </h2>
          </div>
          <div className='paragraph'>
            <p>Ingresa tus datos <strong>tal como aparecen en tu documento de identidad</strong>. Los usaremos cuando compres tus pasajes.</p>
          </div>

          <Formik
            initialValues={{ name: '', email: '', password: '', country: 'CO', id: 'CC', passportCountry: 'CO', idNumber: '', lName: '', date: '', picked: '', countryNumber: '+57', number: '', terms: '', dataTreatment: '',countryPP : 'CO' }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Tienes que ingresar el o los nombres tal como aparecen en tu cédula de ciudadanía';
              } else if (values.name.length < 4) {
                errors.name = 'ingresa al menos 4 caracteres'
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                errors.name = 'el nombre solo puede contener letras y espacios'
              }
              if (!values.email) {
                errors.email = 'Tienes que ingresar un email';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Tienes que ingresar un email válido. El formato correcto es tucorreo@correo.com';
              }
              if (!values.password) {
                errors.password = 'Por favor ingresa una contraseña'
              } else if (values.password.length < 8) {
                errors.password = 'Tienes que ingresar una contraseña que tenga mínimo 8 caracteres e incluir una mayúscula, una minúscula y un número'
              }
              if (!values.idNumber) {
                errors.idNumber = 'Tienes que ingresar un número de cédula de ciudadanía. Ejemplo: 1234567891'
              } else if (values.idNumber.length < 8) {
                errors.idNumber = 'Tienes que ingresar un número de cédula de ciudadanía. Ejemplo: 1234567891'
              } if (!values.date) {
                errors.date = 'La fecha es inválida'
              }
              if (!values.number) {
                errors.number = 'Tienes que ingresar el número de celular'
              } else if (values.number.length < 9) {
                errors.number = 'Tienes que ingresar un celular con 9 números como mínimo.'
              }
              if (!values.terms) {
                errors.terms = 'Tienes que aceptar los Términos y condiciones del Programa LATAM Pass y los Términos y condiciones de la cuenta LATAM.'
              }
              if (!values.dataTreatment) {
                errors.dataTreatment = 'Tienes que aceptar la Política de Privacidad.'
              }
              return errors
            }
            }
            onSubmit={(values, { setSubmitting, resetForm }) => {
              resetForm();
              setDone(true);
              setSubmitting(false);
              setDone(false)
              console.log(values)
            }}
          >{({
            isSubmitting, errors, values
          }
          ) => (<Form>
            <div className="select-field">
              <label>País</label>
              <Field
                as="select"
                id="country"
                name="country"

              >
                <option value="Co">Colombia</option>
                <option value="SF">San Francisco</option>
                <option value="CH">Chicago</option>
                <option value="OTHER">Other</option>
              </Field>
            </div>
            <div className="select-field id">
              <label>Tipo de documento</label>
              <Field
                as="select"
                id="id"
                name="id"
              >
                <option value="CC">Cedula de ciudadanía</option>
                <option value="PP">Pasaporte</option>
              </Field>
              <span>Te recomendamos registrarte con tu cédula de ciudadanía de Colombia</span>
            </div>

            {values.id === 'PP' ?
              <>
                <div className="select-field pp">
                  <label>País de emisión del pasaporte</label>
                  <Field
                    as="select"
                    id="countryPP"
                    name="countryPP"
                  >
                    <option value="Co">Colombia</option>
                    <option value="SF">San Francisco</option>
                    <option value="CH">Chicago</option>
                    <option value="OTHER">Other</option>
                  </Field>
                </div>
                <div className='input-field'>
                  <Field
                    type="input"
                    id="idNumber"
                    name="idNumber"
                    placeholder="Numero de pasaporte"
                  />
                  {errors.idNumber ? <ErrorMessage className="errors" name="idNumber" component="div" /> : <span>Ejemplo: 1234567891</span>}
                </div>
              </>
              :
              <div className='input-field'>
                <Field
                  type="input"
                  id="idNumber"
                  name="idNumber"
                  placeholder="Numero de cedula de ciudadanía"
                />
                {errors.idNumber ? <ErrorMessage className="errors" name="idNumber" component="div" /> : <span>Ejemplo: 1234567891</span>}
              </div>}
            <div className='input-field'>
              <Field
                type="input"
                id="name"
                name="name"
                placeholder="Nombre(s)"
              />

              {errors.name ? <ErrorMessage className="errors" name="name" component="div" /> : <span>Tal como aparece(n) en tu cédula de ciudadanía</span>}

            </div>
            <div className='input-field'>
              <Field
                type="input"
                id="lName"
                name="lName"
                placeholder="Apellidos"
              />
              <span>Tal como aparecen en tu cédula de ciudadanía</span>
            </div>
            <div className='input-field'>
              <Field
                type="date"
                id="date"
                name="date"
                placeholder="Ingresa tu fecha de nacimiento"
              />
              <ErrorMessage className="errors" name="date" component="div" />
            </div>
            <div className="gender" id="my-radio-group">
              <h3 style={{
                fontFamily: 'LATAM Sans',
                fontSize: '20px',
                fontWeight: '400',
                color: '#1B0088',
                textAlign: 'start',
              }}> Género </h3>
            </div>
            <div className="gender-radio" role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="M" />
                Masculino
              </label>
              <label>
                <Field type="radio" name="picked" value="F" />
                Femenino
              </label>
              <label>
                <Field type="radio" name="picked" value="P" />
                Prefiero no decirlo
              </label>

            </div>
            <div className="number-selection" >
              <div className="title">
                <h4 style={{
                  fontFamily: 'LATAM Sans',
                  fontSize: '20px',
                  fontWeight: '400',
                  color: '#1B0088',
                  textAlign: 'start',
                }}> Número de celular </h4>
              </div>
              <div className="select-number-split">
                <div className="select-number">
                  <div className='select-field'>
                    <label>País</label>
                    <Field
                      id="countryNumber"
                      as="select"
                      name="countryNumber"
                      multiple={false}
                    >
                      <option value="CO">+57</option>
                      <option value="SF">+??</option>
                      <option value="CH">+??</option>
                      <option value="OTHER">+??</option>
                    </Field>
                  </div>

                  <div className='input-field'>
                    <Field
                      type="text"
                      id="number"
                      name="number"
                      placeholder="Número de celular"
                    />
                    <ErrorMessage className="errors" name="number" component="div" />
                  </div>
                </div>
              </div>
            </div>
            <div className='login-data'>
              <div className="title tt ">
                <h5 style={{
                  fontFamily: 'LATAM Sans',
                  fontSize: '23px',
                  fontWeight: '400',
                  color: '#1B0088',
                  textAlign: 'start',
                }}> Datos de ingreso a tu cuenta </h5>
              </div>
              <p>
                <strong>Prefiere tu email personal</strong> para asegurar que recibas nuestra comunicación.
              </p>
              <div className='login-div'>
                <div className='input-field'>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage className="errors" name="email" component="div" />
                </div>
                <div className='input-field'>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                  />
                  <ErrorMessage className="errors" name="password" component="div" />
                </div>
              </div>
              <div className='requeriments'>
                <p >Tu contraseña necesita tener mínimo:</p>
                <ul>
                  <div className='requeriment' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z"></path></svg>
                    <li>1 mayúscula</li>
                  </div>
                  <div className='requeriment' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z"></path></svg>
                    <li>1 minúscula</li>
                  </div>
                  <div className='requeriment' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z"></path></svg>
                    <li>1 número</li>
                  </div>
                  <div className='requeriment' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z"></path></svg>
                    <li>8 caracteres</li>
                  </div>
                </ul>
              </div>

              <div className='check-login' role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field as="input" type="checkbox" id="terms" name="terms" value="terms" />
                  <p>Acepto los <a href="/">Términos y condiciones del programa LATAM pass</a>  Y los <a href="/">Términos y condiciones de la cuenta LATAM</a></p>
                </label>
                <ErrorMessage className="errors" name="terms" component="div" />
                <label>
                  <Field as="input" type="checkbox" id="dataTreatment" name="dataTreatment" value="data" />
                  <p>Autorizo que mis datos sean tratados de acuerdo a la <a href="/">Política de privacidad</a></p>
                </label>
                <ErrorMessage className="errors" name="dataTreatment" component="div" />
              </div>
            </div>

            <div>
              <div className="dropdown-data-treatment" onClick={() => checked ? setChecked(false) : setChecked(true)}>
                <div className="dropdown-title">
                  <span>Sobre el tratamiento de datos</span>
                </div>
                <div className="dropdown-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z" /></svg>
                </div>
              </div>
              {checked ? <div className = "message" >
                  <ul>
                    <li>Los responsables del tratamiento de los datos son las compañías que forman LATAM Airlines Group S.A.</li>
                    <li>Tus datos serán usados para: la gestión contractual y el cobro del servicio, la gestión de LATAM Pass; realizar análisis de satisfacción, auditorías, mejora del servicio y prevención del fraude; atender quejas, reclamaciones o sugerencias; el envío de comunicaciones comerciales, relativas a productos y servicios de LATAM.com, y procesos de selección.</li>
                    <li>Los destinatarios son: aeropuertos, autoridades gubernamentales, organismos de Fuerzas y Cuerpos de Seguridad, agentes de viajes u otras empresas que realicen reservas de vuelos con LATAM, empresas de tarjetas de crédito y débito.</li>
                    <li>Tienes derecho de acceso, rectificación, cancelación, oposición, limitación y portabilidad.</li>
                    <li>Legitimación: Ejecución de contrato. Interés legítimo. Obligación legal. Consentimiento.</li>
                  </ul>
                </div>:<></>}
              <hr />
              <div>
                <button className='btn-create' type="submit" disabled={isSubmitting}>Crear cuenta</button>
                {
                  done && <p>Usuario creado correctamente</p>
                }
              </div>
              <p className="captcha latam-form-p">
                Este sitio es protegido por reCAPTCHA y se aplica a las <a href="/">Politicas de Privacidad</a>  y a  los <a href="/">Términos de Servicio</a> de Google.
              </p>
            </div>

          </Form>
          )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default index