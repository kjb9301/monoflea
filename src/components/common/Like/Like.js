import React from 'react';
import classNames from 'classnames/bind';
import styles from './Like.scss';
import {GoHeart} from 'react-icons/go';
const cx = classNames.bind(styles);

const Like = ({like_cnt, onLike, offLike, view_cnt,likeOn,id})  =>{
      return (
    <div className = {cx('like')}> 
      <span onClick = { async (e) =>{
        e.stopPropagation();
        likeOn === true ? offLike(id) : onLike(id)  
      }} >
      <GoHeart  className= {cx('heart', {likeOn})}/> 좋아요 {like_cnt}개 </span>
      <span className = {cx('view_cnt')}> 조회수 {view_cnt}회 </span>
    </div>
    );
}

export default Like;