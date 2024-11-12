import clsx from 'clsx';
import { forwardRef } from 'react';
import s from './Input.module.scss';

const Input = forwardRef(({ type, className, placeholder, name, ...rest }, ref) => {
  return (
    <input
      type={type}
      className={clsx(s.input, className && className)}
      placeholder={placeholder}
      ref={ref}
      name={name}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
