import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { FaGithub, FaGoogle, FaPhone } from 'react-icons/fa';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <h1 className={cx('footer-title')}>MONOFLEA</h1>
      <div className={cx('footer-wrap')}>
        <div className={cx('footer-item')}>
          <div className={cx('item-wrap')}>
            <h3 className={cx('footer-name')}>강종빈</h3>
            <div className={cx('footer-info-box')}>
              <FaGithub 
                className={cx('footer-icon')}
              />
              <FaGoogle 
                className={cx('footer-icon')}
              />
              <FaPhone 
                className={cx('footer-icon')}
              />
            </div>
          </div>
          <p className={cx('item-desc')}>
            웹툰을 즐겨보는 술 좋아하는 풀스택 개발자
          </p>
        </div>
        <div className={cx('footer-item')}>
          <div className={cx('item-wrap')}>
            <h3 className={cx('footer-name')}>서현덕</h3>
            <div className={cx('footer-info-box')}>
              <FaGithub 
                className={cx('footer-icon')}
              />
              <FaGoogle 
                className={cx('footer-icon')}
              />
              <FaPhone 
                className={cx('footer-icon')}
              />
            </div>
          </div>
          <p className={cx('item-desc')}>
            웹툰을 즐겨보는 술 좋아하는 풀스택 개발자
          </p>
        </div>
        <div className={cx('footer-item')}>
          <div className={cx('item-wrap')}>
            <h3 className={cx('footer-name')}>윤지수</h3>
            <div className={cx('footer-info-box')}>
              <FaGithub 
                className={cx('footer-icon')}
              />
              <FaGoogle 
                className={cx('footer-icon')}
              />
              <FaPhone 
                className={cx('footer-icon')}
              />
            </div>
          </div>
          <p className={cx('item-desc')}>
            웹툰을 즐겨보는 술 좋아하는 풀스택 개발자
          </p>
        </div>
        <div className={cx('footer-item')}>
          <div className={cx('item-wrap')}>
            <h3 className={cx('footer-name')}>이창훈</h3>
            <div className={cx('footer-info-box')}>
              <FaGithub 
                className={cx('footer-icon')}
              />
              <FaGoogle 
                className={cx('footer-icon')}
              />
              <FaPhone 
                className={cx('footer-icon')}
              />
            </div>
          </div>
          <p className={cx('item-desc')}>
            웹툰을 즐겨보는 술 좋아하는 풀스택 개발자
          </p>
        </div>
        <div className={cx('footer-item')}>
          <div className={cx('item-wrap')}>
            <h3 className={cx('footer-name')}>정상훈</h3>
            <div className={cx('footer-info-box')}>
              <FaGithub 
                className={cx('footer-icon')}
              />
              <FaGoogle 
                className={cx('footer-icon')}
              />
              <FaPhone 
                className={cx('footer-icon')}
              />
            </div>
          </div>
          <p className={cx('item-desc')}>
            웹툰을 즐겨보는 술 좋아하는 풀스택 개발자
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;