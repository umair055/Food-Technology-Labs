import React from 'react'
import { SignupSchema } from '../../validations/signupValidation';
import { Formik, Form, Field } from 'formik';
function Signup() {
  return (
    <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="password" type="password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <Field name="confirmPassword" type="password" />
          {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
          <button type="submit" onClick={()=>console.log('submitted')}>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default Signup
