import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;

const Button = ({ children, to, theme='default', disabled }) => {
  const Element = (to && !disabled ? Link : Div)
  return (
    <Element
      to={to}
      className={cx('button', theme, {disabled})}
    >
      {children}
    </Element>
  );
};

export default Button;