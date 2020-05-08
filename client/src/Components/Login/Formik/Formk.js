import React from 'react';
import { Formik } from "formik";
import { _ as EmailValidator } from "email-validator";
import { _ as Yup } from "yup";


<Formik
  initialValues={{ email: '', password: '' }}
  onSubmit={{ values }, { setSubmitting }} => {
    setTimeout(() => {
    console.log('Logging in', values);
  }, 500);
  }}
>
    <h1>Validated Login Form</h1>
  </Formik>