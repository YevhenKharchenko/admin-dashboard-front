import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginValidationSchema } from '../../validation/validationSchema.js';
import { loginUser } from '../../redux/auth/operations.js';
import Input from '../shared/Input/Input.jsx';
import PasswordBtn from '../shared/PasswordBtn/PasswordBtn.jsx';
import Button from '../shared/Button/Button.jsx';
import s from './LoginForm.module.scss';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidationSchema) });

  const onSubmit = data => {
    console.log(data);
    dispatch(loginUser(data));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        <Input type="text" placeholder="Email address" {...register('email')} />
        <div className={s.errorContainer}>
          {errors.email && <p className={s.error}>{errors.email.message}</p>}
        </div>
      </label>
      <label className={s.label}>
        <div className={s.passwordWrapper}>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
          />
          <PasswordBtn
            showPass={showPassword}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        </div>
        <div className={s.errorContainer}>
          {errors.password && <p className={s.error}>{errors.password.message}</p>}
        </div>
      </label>
      <Button type="submit" className={s.btn}>
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
