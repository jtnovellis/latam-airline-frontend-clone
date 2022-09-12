import React from 'react'
//import Titles from '../components/Body-Register/Titles'
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const index = () => {
  const [done, setDone] = useState(false);
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
            initialValues={{ name: '', email: '', password: '', country: [], id: [], idNum: '', lName: '', date: '', picked: '', countryNumber: '' }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'por favor ingresa un nombre';
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
              return errors
            }
            }
            onSubmit={(values, { setSubmitting, resetForm }) => {
              resetForm();
              setDone(true);
              setTimeout(() => {
                setSubmitting(false);
                setDone(false)

              }, 1000);
            }}
          >{({
            isSubmitting
          }
          ) => (<Form>
            <div className="select-field">
              <label>País</label>
              <Field
                component="select"
                id="country"
                name="country"
                multiple={false}
              >
                <option value="NY">New York</option>
                <option value="SF">San Francisco</option>
                <option value="CH">Chicago</option>
                <option value="OTHER">Other</option>
              </Field>
            </div>
            <div className="select-field id">
              <label>Tipo de documento</label>
              <Field
                component="select"
                id="id"
                name="id"
                multiple={false}
              >
                <option value="NY">Cedula de ciudadanía</option>
                <option value="SF">Pasaporte</option>
              </Field>
              <span>Te recomendamos registrarte con tu cédula de ciudadanía de Colombia</span>
            </div>
            <div className='input-field'>
              <Field
                type="input"
                id="idNum"
                name="idNum"
                placeholder="Numero de cedula de ciudadanía"
              />
              <ErrorMessage className="errors" name="idNum" component="div" />
              <span>Ejemplo: 1234567891</span>
            </div>
            <div className='input-field'>
              <Field
                type="input"
                id="name"
                name="name"
                placeholder="Nombre(s)"
              />
              <ErrorMessage className="errors" name="name" component="div" />
              <span>Tal como aparece(n) en tu cédula de ciudadanía</span>
            </div>
            <div className='input-field'>
              <Field
                type="input"
                id="lname"
                name="lname"
                placeholder="Apellidos"
              />
              <ErrorMessage className="errors" name="lname" component="div" />
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
                <Field type="radio" name="picked" value="Masculino" />
                Masculino
              </label>
              <label>
                <Field type="radio" name="picked" value="Femenino" />
                Femenino
              </label>
              <label>
                <Field type="radio" name="picked" value="Prefiero-no-decirlo" />
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
                      component="select"
                      id="countryNumber"
                      name="countryNumber"
                      multiple={false}
                    >
                      <option value="CO">+57</option>
                      <option value="SF">San Francisco</option>
                      <option value="CH">Chicago</option>
                      <option value="OTHER">Other</option>
                    </Field>
                  </div>

                  <div className='input-field'>
                    <Field
                      type="number"
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
                  <li>1 mayúscula</li>
                  <li>1 minúscula</li>
                  <li>1 número</li>
                  <li>8 caracteres</li>
                </ul>
              </div>

              <div className='check-login' role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field type="checkbox" name="checked" value="One" />
                  <p>Acepto los <a href="">Términos y condiciones del programa LATAM pass</a>  Y los <a href="">Términos y condiciones de la cuenta LATAM</a></p>
                </label>
                <label>
                  <Field type="checkbox" name="checked" value="Two" />
                  <p>Autorizo que mis datos sean tratados de acuerdo a la <a href="">Política de privacidad</a></p>
                </label>
              </div>
            </div>

            <div>
              <div className="dropdown-data-treatment">
                <div className="dropdown-title">
                  <span>Sobre el tratamiento de datos</span>
                </div>
                <div className="dropdown-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z" /></svg>
                </div>
              </div>
              <hr />
              <div>
                <button className='btn-create' type="submit" disabled={isSubmitting}>Crear cuenta</button>
                {
                  done && <p>Usuario creado correctamente</p>
                }
              </div>
              <p className="captcha latam-form-p">
                Este sitio es protegido por reCAPTCHA y se aplica a las <a href>Politicas de Privacidad</a>  y a  los <a href>Términos de Servicio</a> de Google.
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