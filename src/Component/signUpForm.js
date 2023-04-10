import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import emailjs from 'emailjs-com';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';


    
const USER_ID = process.env.REACT_APP_EMAILJS_USERID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATEID
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICEID

const schema = {
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128,
    },
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
};


const SignUpForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();

        emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          e.target,
          USER_ID
        )
        .then((res) => console.log('SUCCESS!', res.status, res.text))
        .catch(error => console.log('FAILED...', error));

        setFormState(formState => ({
          ...formState,
          isValid: false,
          values: {},
          touched: {},
          errors: {}
        }));
  }

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (e) => {
    e.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value,
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className='contactForm'>
        <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}
    headers='application/json'
    name="contact-form"
    onSubmit={sendEmail}>
      <h2><strong>Sign Up</strong></h2>

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4'/>

      <MDBInput label='Password' v-model='name' wrapperClass='mb-4' />

      

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4'
       size="large"
       variant="contained"
       type="submit"
       disabled={formState.isValid}
      >
        Send
      </MDBBtn>
    </form></div>
    
  );
};


export default SignUpForm;