import * as Yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup
  .string()
  .min(6,'Password must be greater than 6 characters')
  .matches(passwordRules, { message: "Please create a stronger password" })
  .required("Required"),
confirmPassword: Yup
  .string()
  .oneOf([Yup.ref("password"), null], "Passwords must match")
  .required("Required"),
});

