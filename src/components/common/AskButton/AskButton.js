import React from 'react';
import styles from './AskButton.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;

const Button = ({ children, to, theme='default', disabled, onClick}) => {
  const Element = (to && !disabled ? Link : Div)
  return (
    <Element
      to={to}
      className={cx('button', theme, {disabled})}
      onClick={onClick}
    >
      {children}
    </Element>
  );
};

export default Button;