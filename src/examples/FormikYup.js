import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const nameSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required')
})

const NameForm = () => (
  <Formik
    initialValues={{
      firstName: ''
    }}
    onSubmit={(values) => console.log(values)}
    validationSchema={nameSchema}
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

