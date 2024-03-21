import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
}

export const Button = (props: ButtonProps) => {

  const { className, children, ...otherProps } = props;

  return (
    <button 
      className={clsx(styles.button, className)}
      {...otherProps}
    >
        {children}
    </button>
  )
}