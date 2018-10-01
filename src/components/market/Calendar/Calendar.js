import React from 'react';
import styles from './Calendar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Days = ({dayList,curDay}) => (
  dayList.map((days,index) => {
    const {day,weekday} = days;
    return (
      <div className={cx('days')} key={index}>
        <div className={cx('weekday')}>{weekday}</div>
        <div className={cx('day')}>{day}</div>
      </div>
    )
  })
)

const Calendar = ({curMonth,curYear,curDay,dayList,onPrevMonth,onNextMonth,onPrevDay,onNextDay}) => {

  return (
    <div className={cx('calendar')}>
      <div className={cx('header')}>
        <div className={cx('icon')} onClick={onPrevMonth}>chevron_left</div>
        <div className={cx('col col-center')}>
          <span>{curYear} {curMonth}</span>
        </div>
        <div className={cx('icon')} onClick={onNextMonth}>chevron_right</div>
      </div>
      <div className={cx('days-wrapper')}>
        <div className={cx('icon')} onClick={onPrevDay}>chevron_left</div>
        <Days dayList={dayList} curDay={curDay}/>
        <div className={cx('icon')} onClick={onNextDay}>chevron_right</div>
      </div>
		</div>
    ); 
}

export default Calendar;