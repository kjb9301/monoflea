import React from 'react';
import styles from './Calendar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Days = ({daysInWeekList,curYear,curMonth,onSelect,onSelectDate}) => (
  daysInWeekList.map((daysInWeeks,index) => {
    const {day,weekday,isToday,selected,daysInWeek} = daysInWeeks;
    const isSunday = weekday === 'Sun'? true : false;
    const isSat = weekday === 'Sat'? true : false;
    let selectMonth = curMonth.length < 2? '0' + curMonth.toString() : curMonth;
    let selectDay = day.length < 2? '0' + day.toString() : day;
    const selectDate = `${curYear}-${selectMonth}-${selectDay}`;
    return (
      // <div className={cx('days',{isSunday:isSunday,isSat:isSat,selected:selected})} key={index} onClick={() => onSelect(selectDate)}>
      <div className={cx('days',{isSunday:isSunday,isSat:isSat,selected:selected})} key={index} onClick={() => onSelectDate(daysInWeek)}>
        <div className={cx('weekday',{isToday:isToday})}>{weekday}</div>
        <div className={cx('day',{isToday:isToday})}>{day}</div>
      </div>
    )
  })
)

const Calendar = ({curMonth,curYear,daysInWeekList,onPrevMonth,onNextMonth,onPrevDay,onNextDay,onSelect,onSelectDate}) => {
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
      <div className={cx('left-wrapper')}>
        <div className={cx('icon')} onClick={onPrevMonth}>chevron_left</div>
        <div className={cx('col col-center')}>
          <span>{curYear} {curMonth}월</span>
        </div>
        <div className={cx('icon')} onClick={onNextMonth}>chevron_right</div>
      </div>
      <div className={cx('right-wrapper')}>
        <div className={cx('icon')} onClick={onPrevDay}>chevron_left</div>
        <Days daysInWeekList={daysInWeekList} curYear={curYear} curMonth={curMonth} onSelect={onSelect} onSelectDate={onSelectDate}/>
        <div className={cx('icon')} onClick={onNextDay}>chevron_right</div>
      </div>
		</div>
    ); 
}

export default Calendar;