import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyPageHostMarket.scss';
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div style={{
//   color: 'white', 
//   background: 'grey',
//   padding: '15px 10px',
//   display: 'inline-flex',
//   textAlign: 'center',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: '100%',
//   transform: 'translate(-50%, -50%)'
// }}>{text}</div>;

const cx = classNames.bind(styles);
const MyPageHostMarket = ({data}) => {
  const { start_date, end_date, host, seller_cnt, seller_limit_cnt,
          market_place, reg_end_date, reg_start_date} = data;
  return (
  <div className = {cx('detail-info-wrapper')} >
      <div className = {cx('detail-info')}>
        <div className = {cx('info item-date')}>개설날짜 : {start_date} ~ {end_date}</div>
        <div className = {cx("info item-reg")}> 모집기간 : {reg_start_date} ~ {reg_end_date}</div>
        <div className = {cx("info item-host")}>주최자 :  {host.host_id} </div>
        <div className = {cx("info item-market_place")}>장소 : {market_place}</div>
        <div className = {cx("info item-seller_cnt")}> 모집현황 : {seller_cnt} / {seller_limit_cnt} </div>
      </div>
      <div className = {cx("status-wrapper")}>
          <div className = {cx("apply-stauts")}> 신청상태 : { } </div>
          <div className = {cx("detailBtn")} >지도</div>
          {/* <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAVXjHTyBAf4UxquuFxgR5NWXFF6Kz_zSI' }}
              // defaultCenter={this.props.center}
              // defaultZoom={this.props.zoom}
              defaultCenter={{lat: 59.95, lng: 30.33}}
              defaultZoom={11}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Kreyser Avrora'}
              />
            </GoogleMapReact>
          </div> */}
      </div> 
  </div>
  )
}
export default MyPageHostMarket;