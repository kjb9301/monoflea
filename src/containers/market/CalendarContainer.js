import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import dateFns from "date-fns";
import Calendar from 'components/market/Calendar';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class CalendarContainer extends Component {
  handleSelect = (category) => {
    const {MarketActions} = this.props;
    //console.log(category)
    //MarketActions.getMarketList('Y',category);
  }

  handleSelectDate = (selectedDateParam) => {
    const {MarketUIActions} = this.props;
    console.log(selectedDateParam)
    MarketUIActions.getSelectedDate(selectedDateParam)

    const {selectedDate} = this.props;
    console.log(selectedDate)
  }

  HandleNextMonth = () => {
    const {MarketUIActions,currentDate} = this.props;
    const nextMonth = dateFns.addMonths(currentDate,1);
    MarketUIActions.getSelectedDate(nextMonth);
    MarketUIActions.nextMonth(nextMonth);
  }

  HandlePrevMonth = () => {
    const {MarketUIActions,currentDate} = this.props;
    const prevMonth = dateFns.subMonths(currentDate,1);
    MarketUIActions.getSelectedDate(prevMonth);
    MarketUIActions.prevMonth(prevMonth);
  }

  HandlePrevDay = () => {
    const {MarketUIActions,currentDate} = this.props;
    const prevWeek = dateFns.subDays(currentDate,7);
    MarketUIActions.getSelectedDate(prevWeek);
    MarketUIActions.prevWeek(prevWeek);
  }

  HandleNextDay = () => {
    const {MarketUIActions,currentDate} = this.props;
    const nextWeek = dateFns.addDays(currentDate,7);
    MarketUIActions.getSelectedDate(nextWeek);
    MarketUIActions.nextWeek(nextWeek);
  }

  render() {
    const {loading,today,currentDate,onSelect,selectedDate} = this.props;
    const {handleSelect,handleSelectDate,HandlePrevMonth,HandleNextMonth,HandlePrevDay,HandleNextDay} = this;
    // const startDayOfMonth = dateFns.startOfMonth(currentDate);
    // const endDayOfMonth = dateFns.endOfMonth(currentDate);
    // const day_length = dateFns.differenceInDays(endDate,startDate) + 1;
    
    const dateFormat_Y = "YYYY";
    const dateFormat_M = "M";
    const dateFormat_D = "D";
    const dateFormat_d = "ddd";
  
    const curMonth = dateFns.format(selectedDate,dateFormat_M);
    const curYear = dateFns.format(selectedDate,dateFormat_Y);
    const curDay = dateFns.format(selectedDate,dateFormat_D);

    //const firstOfWeek = dateFns.startOfWeek(currentDate)
    //const lastOfWeek = dateFns.endOfWeek(currentDate)

    //const weeksInMonth = dateFns.differenceInCalendarWeeks(endDayOfMonth,startDayOfMonth)

    let daysInWeekList = [];
    // let startDayOfFirstWeek = '';
    // let startDayOfWeek = '';

    // for(let i = 0; i < weeksInMonth+1; i++){
    //   startDayOfFirstWeek = dateFns.startOfWeek(currentDate)
    //   startDayOfWeek = dateFns.addWeeks(startDayOfFirstWeek,i)
    //   let daysInWeek = [];

    //   for(let j = 0; j < 7; j++) {
    //     const days = dateFns.addDays(startDayOfWeek,j);
    //     const isToday = dateFns.isSameDay(currentDate,days);
    //     const weekday = dateFns.format(days,dateFormat_d);
    //     const day = dateFns.format(days,dateFormat_D);
    //     daysInWeek.push({day,weekday,isToday})   
    //   }
    //   daysInWeekList.push(daysInWeek)
    // }
 
    const startDayOfWeek = dateFns.startOfWeek(currentDate);
    const endDayOfWeek = dateFns.endOfWeek(currentDate);
    const daysInWeek_len = dateFns.differenceInDays(endDayOfWeek,startDayOfWeek) + 1;
    
    for(let i = 0; i < daysInWeek_len; i++){
      const daysInWeek = dateFns.addDays(startDayOfWeek,i);
      const isToday = dateFns.isSameDay(today,daysInWeek);
      const selected = dateFns.isSameDay(selectedDate,daysInWeek);
      const weekday = dateFns.format(daysInWeek,dateFormat_d);
      const day = dateFns.format(daysInWeek,dateFormat_D);
      daysInWeekList.push({day,weekday,isToday,selected,daysInWeek});
    }

    if(loading) return null;
    return (
      <div>
        <Calendar 
          curYear={curYear} 
          curMonth={curMonth} 
          curDay={curDay} 
          daysInWeekList={daysInWeekList} 
          onPrevMonth={HandlePrevMonth} 
          onNextMonth={HandleNextMonth} 
          onPrevDay={HandlePrevDay} 
          onNextDay={HandleNextDay}
          onSelect={handleSelect}
          onSelectDate={handleSelectDate}  
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    selectedDate: state.marketUI.getIn(['calendar','selectedDate']),
    currentDate: state.marketUI.getIn(['calendar','currentDate']),
    today: state.marketUI.getIn(['calendar','today']),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketUIActions: bindActionCreators(marketUIActions,dispatch),
    MarketActions: bindActionCreators(marketActions,dispatch)
  })
)(CalendarContainer);