import * as yup from "yup";

export const RegisterFormSchemas = yup.object().shape({
  email: yup.string().email("Email is wrong").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be 6 characters")
    .required("Password is required"),
  term: yup.boolean().required("Please, accept our terms"),
  fname: yup
    .string()
    .required("First Name is required")
    .min(2, "First Name must be min 6 characters")
    .max(50, "First Name must be max 50 characters"),
  lname: yup
    .string()
    .required("Last Name is required")
    .min(2, "Last Name must be min 6 characters")
    .max(50, "Last Name must be max 50 characters"),
});
