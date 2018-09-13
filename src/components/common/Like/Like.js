import React from 'react';
import classNames from 'classnames/bind';
import styles from './Like.scss';
import {GoHeart} from 'react-icons/go';
const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>;
const Like = ({like_cnt, onLike})  =>{
    return (
     <div className = {cx('like')}> 
      <GoHeart onClick = {onLike} className= {cx('heart')}/> 좋아요 {like_cnt}개 
    </div>
      // <Div
      //   className = {cx('Like')}
      // >
      //   {children}
      // </Div>
    );
}

export default Like;