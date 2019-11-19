import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const validate = (values) => {
  const { firstName } = values
  const errors = {}

  if (!firstName) {
    errors.firstName = 'Required'
  } else if (firstName.length < 2) {
    errors.firstName = 'Too Short!'
  } else if (firstName.length > 20) {
    errors.firstName = 'Too Long!'
  }

  return errors
}

const NameForm = () => (
  <Formik
    initialValues={{
      firstName: ''
    }}
    onSubmit={(values) => console.log(values)}
    validate={validate}
  >
    {() => (
      <Form>
        <label>
          First Name:
          <Field type="text" name="firstName" />
        </label>
        <ErrorMessage name="firstName" />
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
)

export default NameForm

