import React from 'react';
import styles from './Calendar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Days = ({dayList}) => (
  dayList.map((days,index) => {
    const {day,weekday} = days;
    return (
      <div className={cx('days')} key={index}>
        <div>{weekday}</div>
        <div>{day}</div>
      </div>
    )
  })
)

const Calendar = ({curMonth,curYear,dayList,onPrevMonth,onNextMonth}) => {

  return (
    <div className={cx('calendar')}>
			<div>{curYear}</div>
      <div className={cx('header')}>
        <span onClick={onPrevMonth}>◀</span>
        {curMonth}
        <span onClick={onNextMonth}>▶</span>
      </div>
      <Days dayList={dayList}/>
		</div>
    ); 
}

export default Calendar;