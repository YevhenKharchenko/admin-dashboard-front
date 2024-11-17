import * as yup from 'yup';
import { categories, REGEX } from '../constants/index.js';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('Email is required').matches(REGEX.EMAIL, 'Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters long')
    .max(20, 'Password cannot be longer than 20 characters'),
});

export const addProductValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Password must be at least 3 characters long')
    .max(20, 'Password cannot be longer than 20 characters'),
  suppliers: yup
    .string()
    .required('Suppliers is required')
    .min(3, 'Suppliers must be at least 3 characters long')
    .max(20, 'Suppliers cannot be longer than 20 characters'),
  stock: yup
    .string()
    .required('Stock is required')
    .min(1, 'Stock must be at least 3 characters long')
    .max(20, 'Stock cannot be longer than 20 characters'),
  price: yup
    .string()
    .required('Price is required')
    .min(3, 'Price must be at least 3 characters long')
    .max(20, 'Price cannot be longer than 20 characters'),
  category: yup
    .mixed()
    .required('Category is required')
    .oneOf(categories, 'Category must be one of options'),
});
