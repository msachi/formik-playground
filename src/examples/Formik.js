import React from 'react'
import { Formik, Form, Field } from 'formik'

const NameForm = () => (
  <Formik
    initialValues={{
      firstName: ''
    }}
    onSubmit={(values) => {
      alert('A name was submitted: ' + values.firstName)
    }}
  >
    {() => (
      <Form>
        <label>
          First Name:
          <Field type="text" name="firstName" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
)

export default NameForm

