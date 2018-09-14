import React from 'react';
import classNames from 'classnames/bind';
import styles from './Like.scss';
import {GoHeart} from 'react-icons/go';
const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>;
const Like = ({like_cnt, onLike, likeOn})  =>{
    return (
    <div className = {cx('like')}> 
      <span onClick = {() => onLike()} ><GoHeart  className= {cx('heart',{likeOn})}/> 좋아요 {like_cnt}개 </span>
    </div>
      // <Div
      //   className = {cx('Like')}
      // >
      //   {children}
      // </Div>
    );
}

export default Like;