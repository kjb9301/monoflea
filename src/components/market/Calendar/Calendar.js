import React from 'react';
import styles from './Calendar.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button/Button';

const cx = classNames.bind(styles);

const Days = ({daysInWeekList,curYear,curMonth,onSelect}) => (
  daysInWeekList.map((daysInWeeks,index) => {
    const {day,weekday,isToday} = daysInWeeks;
    //const selectDate = new Date(curYear,curMonth,day);
    let selectMonth = (curMonth.length < 2? '0'+curMonth : curMonth);
    let selectDay = (day.length < 2? '0'+day : day);
    //const selectYear = curYear;
    //let selectMonth = selectDate.getMonth() + 1;
    //let selectDay = selectDate.getDate();
    const selectPeriod = `${curYear}-${selectMonth}-${selectDay}`;

    return (
      <div className={cx('days')} key={index}>
        <div className={cx('weekday')}>{weekday}</div>
        <Button className={cx('day')} toGetData={onSelect} onHandleParams={selectPeriod}>{day}</Button>
      </div>
    )
  })
)

const Calendar = ({curMonth,curYear,daysInWeekList,onPrevMonth,onNextMonth,onPrevWeek,onNextWeek,onSelect}) => {
  // let dayList = ''
  // for(let daysInWeek of daysInWeekList){
  //   for(let i in daysInWeek){
  //     if(daysInWeek[i].isToday === true){
  //       dayList = daysInWeek
  //       break;
  //     }
  //   }
  // }
  
  return (
    <div className={cx('calendar')}>
      <div className={cx('header')}>
        <div className={cx('icon')} onClick={onPrevMonth}>chevron_left</div>
        <div className={cx('col col-center')}>
          <span>{curYear} {curMonth}월</span>
        </div>
        <div className={cx('icon')} onClick={onNextMonth}>chevron_right</div>
      </div>
      <div className={cx('days-wrapper')}>
        <div className={cx('icon')} onClick={onPrevWeek}>chevron_left</div>
        <Days daysInWeekList={daysInWeekList} curYear={curYear} curMonth={curMonth} onSelect={onSelect}/>
        <div className={cx('icon')} onClick={onNextWeek}>chevron_right</div>
      </div>
		</div>
    ); 
}

export default Calendar;