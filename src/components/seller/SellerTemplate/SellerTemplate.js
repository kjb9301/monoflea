import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerTemplate.scss';

const cs = classNames.bind(styles)

const SellerTemplate = ({ children}) =>{

  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default SellerTemplate;