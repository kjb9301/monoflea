import React from 'react';
import styles from './MypageMapModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import GoogleMapReact from 'google-map-react';

const cx = classNames.bind(styles);

const AnyReactComponent = ({ text }) => <div style={{
  color: 'white', 
  background: 'grey',
  padding: '15px 10px',
  display: 'inline-flex',
  width: '100px',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
}}>{text}</div>;

const MypageMapModal = ({ visible, closeMap, marketMap }) => {
  const { lat, lng, market_name } = marketMap;
  return (
    <ModalWrapper visible={visible}>
      <div className={cx('map-modal')}>
        <div className={cx('modal-top')}>
          <h3 className={cx('modal-title')}>마켓 위치 정보</h3>
          <button className={cx('close')} onClick={closeMap}>&times;</button>
        </div>
        <div className={cx('modal-content')}>
          <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAVXjHTyBAf4UxquuFxgR5NWXFF6Kz_zSI' }}
              defaultCenter={{ lat, lng}}
              defaultZoom={17}
            >
              <AnyReactComponent
                lat={lat}
                lng={lng}
                text={market_name}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default MypageMapModal;