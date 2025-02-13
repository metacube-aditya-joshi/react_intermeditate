import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initalValues, validationSchema } from "../config/formConfig";

export function LoginForm() {
  return (
    <div className="w-screen h-screen bg-teal-600 flex justify-center items-center">
    <Formik
    
      initialValues={initalValues}
      validationSchema={Yup.object(validationSchema)}
      onSubmit={(value) => {
        console.log(value);
      }}
     
     >
      <Form className="flex  justify-center items-center flex-col border-2 bg-cyan-700 gap-3 rounded-2xl h-1/2 w-1/3 form">
        <label htmlFor="firstName">Enter First Name :</label>
        <Field id="firstName" name="firstName" placeholder="First Name" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Enter Last Name :</label>
        <Field id="lastName" name="lastName" placeholder="Last Name" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Enter E-Mail :</label>
        <Field id="email" name="email" placeholder="E-Mail" />
        <ErrorMessage name="email" />
      </Form>
    </Formik>
    </div>
  );
}
