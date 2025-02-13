import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initalValues, validationSchema } from "../config/formConfig";

export function LoginForm() {
  return (
    <div className="w-screen h-screen bg-regal-blue flex justify-center ">
      <Formik
        initialValues={initalValues}
        validationSchema={Yup.object(validationSchema)}
        onSubmit={(value) => {
          console.log(value);
        }}
        validateOnBlur={false}
      >
        <Form className="flex  flex-col justify-center  gap-7 rounded-2xl form">
          <legend className="text-white text-6xl text-center p-8 ">
            Contact Us
          </legend>
          <div className="flex justify-between gap-2 ">
            <label
              htmlFor="firstName"
              className="text-white text-2xl font-extrabold "
            >
              Enter First Name :
            </label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="bg-white border-1 self-center rounded-md p-1"
            />
            <ErrorMessage
              name="firstName"
              render={(msg) => <div className="text-yellow-400">{msg}</div>}
            />
          </div>

          <div className="flex justify-between  gap-2">
            <label
              htmlFor="lastName"
              className="text-white text-2xl font-extrabold"
            >
              Enter Last Name :
            </label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="bg-white border-1 self-center rounded-md p-1"
            />
            <ErrorMessage
              name="lastName"
              render={(msg) => <div className="text-yellow-400">{msg}</div>}
            />
          </div>

          <div className="flex justify-between gap-2">
            <label
              htmlFor="email"
              className="text-white text-2xl font-extrabold "
            >
              Enter E-Mail :
            </label>
            <Field
              id="email"
              name="email"
              placeholder="E-Mail"
              className="bg-white self-center border-1 rounded-md p-1"
              
            />
            <ErrorMessage
              name="email"
              render={(msg) => <div className="text-yellow-400">{msg}</div>}
            />
          </div>

          <div className="flex justify-between gap-2">
            <label
              htmlFor="company"
              className="text-white text-2xl font-extrabold "
            >
              Enter Company's Name :
            </label>
            <Field
              id="company"
              name="company"
              placeholder="Company"
              className="bg-white self-center border-1 rounded-md p-1"
            />
            <ErrorMessage
              name="company"
              render={(msg) => <div className="text-yellow-400">{msg}</div>}
            />
          </div>

          <div className="flex justify-between gap-2 ">
            <label
              htmlFor="country"
              className="text-white text-2xl font-extrabold "
            >
              Select Country :
            </label>
            <Field
              as="select"
              id="country"
              name="country"
              placeholder="country"
              className="bg-white border-1 self-center rounded-md p-1 "
            >
              <option value="red">....Select....</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
              <option value="Japan">Japan</option>
            </Field>
            <ErrorMessage
              name="country"
              render={(msg) => <div className="text-yellow-400">{msg}</div>}
            />
          </div>
          <button
            type="submit"
            className="shadow-md hover:shadow-teal-100 border-white border-2 w-fit px-6 py-1 rounded-md text-white"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
