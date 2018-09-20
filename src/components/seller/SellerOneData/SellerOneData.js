import React from 'react';
import classNames from 'classnames/bind';
import styles from './SellerOneData.scss';

import {TiCog} from 'react-icons/ti';

const cx = classNames.bind(styles);

const Edit = ({onModalLogged, detailData, userType}) =>{
  return (
    userType === 'S' ? 
    <div className= {cx('Edit')} onClick = {() => onModalLogged()
                                                  }>
      <TiCog/>
    </div>
    : null
  );
}

export default Edit;

