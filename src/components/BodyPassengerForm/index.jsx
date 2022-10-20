import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_PASSENGER_FORMDATA,
  UPDATE_PASSENGER_FORMDATA,
} from '../../store/reducers/flightsReducer';

const BodyPassengerForm = ({ passengerId }) => {
  const { passengerRelated } = useSelector(state => state.flightsReducer);

  const dispatch = useDispatch();
  return (
    <div className='BPF__section'>
      <hr />
      <div className='main'>
        <Formik
          initialValues={{
            firstName: passengerRelated[passengerId]?.firstName || '',
            lastName: passengerRelated[passengerId]?.lastName || '',
            birthdate: passengerRelated[passengerId]?.birthdate || '',
            gender: passengerRelated[passengerId]?.gender || 'Male',
            country: passengerRelated[passengerId]?.country || 'CO',
            documentType:
              passengerRelated[passengerId]?.documentType ||
              'Cédula de ciudadanía',
            passportCountry:
              passengerRelated[passengerId]?.passportCountry || 'CO',
            documentNumber: passengerRelated[passengerId]?.documentNumber || '',
            email: passengerRelated[passengerId]?.email || '',
            number: passengerRelated[passengerId]?.number || '',
            countryPP: passengerRelated[passengerId]?.countryPP || 'CO',
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
                'El nombre solo puede contener letras y espacios';
            }
            if (!values.lastName) {
              errors.lastName =
                'Tienes que ingresar los apellidos tal como aparecen en tu cédula de ciudadanía';
            } else if (values.lastName.length < 4) {
              errors.lastName = 'ingresa al menos 4 caracteres';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
              errors.lastName =
                'El apellido solo puede contener letras y espacios';
            }
            if (!values.email) {
              errors.email = 'Tienes que ingresar un email';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email =
                'Tienes que ingresar un email válido. El formato correcto es tucorreo@correo.com';
            }
            if (!values.documentNumber) {
              errors.documentNumber =
                'Tienes que ingresar un número de cédula de ciudadanía. Ejemplo: 1234567891';
            } else if (values.documentNumber.length < 8) {
              errors.documentNumber =
                'Tienes que ingresar un número de cédula de ciudadanía. Ejemplo: 1234567891';
            } else if (!/^\d+$/i.test(values.documentNumber)) {
              errors.documentNumber =
                'Tienes que ingresar un número de cédula de ciudadanía. Ejemplo: 1234567891';
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
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            if (passengerRelated[passengerId]) {
              dispatch({
                type: UPDATE_PASSENGER_FORMDATA,
                payload: { values, position: passengerId },
              });
              console.log('hi');
            } else {
              dispatch({ type: ADD_PASSENGER_FORMDATA, payload: values });
            }
          }}>
          {({ isSubmitting, errors, values }) => (
            <Form>
              <div id='fullNameField' className='doubleField'>
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

                  {errors.lastName ? (
                    <ErrorMessage
                      className='errors'
                      name='lastName'
                      component='div'
                    />
                  ) : (
                    <span>Tal como aparecen en tu cédula de ciudadanía</span>
                  )}
                </div>
              </div>
              <div id='BirthD_GenderField' className='doubleField'>
                <div className='input-field'>
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
                <div className='select-field id'>
                  <label>Género</label>
                  <Field as='select' id='gender' name='gender'>
                    <option value='Male'>Masculino</option>
                    <option value='Female'>Femenino</option>
                    <option value='ND'>Prefiero no decirlo</option>
                  </Field>
                  <span> </span>
                </div>
              </div>
              <div id='countryField' className='doubleField'>
                <div className='select-field'>
                  <label>País</label>
                  <Field as='select' id='country' name='country' disabled>
                    <option value='Co'>Colombia</option>
                    <option value='SF'>San Francisco</option>
                    <option value='CH'>Chicago</option>
                    <option value='OTHER'>Other</option>
                  </Field>
                </div>
              </div>

              <div id='documentField' className='doubleField'>
                <div className='select-field id'>
                  <label>Tipo de documento</label>
                  <Field as='select' id='documentType' name='documentType'>
                    <option value='Cédula de ciudadanía'>
                      Cédula de ciudadanía
                    </option>
                    <option value='Pasaporte'>Pasaporte</option>
                  </Field>
                  <span>
                    Te recomendamos registrarte con tu cédula de ciudadanía de
                    Colombia
                  </span>
                </div>
                {values.documentType === 'Pasaporte' ? (
                  <>
                    <div className='select-field pp'>
                      <label>País de emisión del pasaporte</label>
                      <Field
                        as='select'
                        id='countryPP'
                        name='countryPP'
                        disabled>
                        <option value='Co'>Colombia</option>
                        <option value='SF'>San Francisco</option>
                        <option value='CH'>Chicago</option>
                        <option value='OTHER'>Other</option>
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
                        <span>Ejemplo: 1234567891</span>
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
                      <span>Ejemplo: 1234567891</span>
                    )}
                  </div>
                )}
              </div>

              <div id='contactField' className='doubleField'>
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

                <div className='doubleField__short select-number'>
                  <div className='select-field'>
                    <label>País</label>
                    <Field
                      id='countryNumber'
                      as='select'
                      name='countryNumber'
                      multiple={false}
                      disabled>
                      <option value='CO'>+57</option>
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

              <div>
                <hr />
                <div className='btn__container'>
                  <button
                    className='btn-create'
                    type='submit'
                    disabled={isSubmitting}>
                    Guardar
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BodyPassengerForm;
