import * as Yup from "yup";

const initalValues = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  gender: "",
  company:''
};
 const validationSchema={
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
         company:Yup.string().max(10,"Must be 10 Characters or less").required('Required')
       }



export { initalValues ,validationSchema};
