import React from 'react'
import { Formik, Form } from 'formik'
import Input from '@boltui/input'
import Button from '@boltui/button'

const validate = {
  // validation logic
}

const onSubmit = {
  // submission logic
}

const NameForm = ({ initialValues }) => (
  <Formik
    initialValues={initialValues}
    validate={validate}
    validateOnBlur={true}
    validateOnChange={true}
    onSubmit={onSubmit}>
    {({
      values, errors, touched, handleChange, handleBlur, isSubmitting
    }) => (
      <Form>
        <Input
          name="firstName"
          label="First name"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && errors.firstName}
        />
        <Button type="submit" isLoading={isSubmitting}>Submit</Button>
      </Form>
    )}
  </Formik>
)

export default NameForm

