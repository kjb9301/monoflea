import React from 'react';
import styles from './MypageMapModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from 'components/modal/ModalWrapper';
import GoogleMapReact from 'google-map-react';
import { MdLocationOn } from 'react-icons/md';

const cx = classNames.bind(styles);

const AnyReactComponent = ({ text }) => (
  <div style={{
    padding: '15px 10px',
    display: 'inline-flex',
    width: '100px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)',
    position: 'relative'
  }}>
    <div>
      <MdLocationOn 
        style={{ 
          'fontSize': '50px',
          'color': 'red',
          'backgroundColor': 'transparent',
          'position': 'absolute',
          'top': '50%',
          'left': '50%',
          'transform': 'translate(-50%, -50%)'
        }} 
      />
    </div>
    <span 
      style={{ 
        'position': 'absolute',
        'width': '200px',
        'bottom': '-120%',
        'left': '50%',
        'transform': 'translate(-50%, 0%)',
        'color': 'color',
        'fontSize': '15px',
        'fontWeight': 'bold'
      }}
    >{text}
    </span>
  </div>
)

// const AnyReactComponent = ({ text }) => <FaMapMarker style={{ 'color' }}/>

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
              defaultCenter={{ lat, lng }}
              defaultZoom={18}
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