import * as yup from 'yup';
import { REGEX } from '../constants/index.js';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('Email is required').matches(REGEX.EMAIL, 'Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long')
    .max(20, 'Password cannot be longer than 20 characters'),
});
