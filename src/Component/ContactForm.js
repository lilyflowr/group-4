import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import emailjs from 'emailjs-com';
import { MDBInput, MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';


    
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


const ContactForm = () => {

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
      <h2><strong>Contact us</strong></h2>


      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' 
      // helperText={
      //   hasError('name') ? formState.errors.name[0] : null
      // }
      // error={hasError('name')}
      // onChange={handleChange}
      // value={formState.values.name || ''}  
      />



      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4'
      // helperText={
      //   hasError('email') ? formState.errors.email[0] : null
      // }
      // error={hasError('email')}
      // onChange={handleChange}
      // value={formState.values.email || ''}  
      
      />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

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


export default ContactForm;