import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import dateFns from "date-fns";
import Calendar from 'components/market/Calendar';

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class CalendarContainer extends Component {
  handleSelect = (dateParam) => {
    const {MarketActions,MarketUIActions} = this.props;

    const curMonth = dateFns.format(dateParam,'M');
    const curYear = dateFns.format(dateParam,'YYYY');
    const curDay = dateFns.format(dateParam,'D');

    let selectMonth = curMonth.length < 2? '0' + curMonth.toString() : curMonth;
    let selectDay = curDay.length < 2? '0' + curDay.toString() : curDay;

    const selectDate = `${curYear}-${selectMonth}-${selectDay}`;

    MarketUIActions.saveDate(selectDate);
    MarketActions.getMarketList('Y',selectDate);
  }

  handleSelectDate = (selectedDateParam) => {
    const {MarketUIActions} = this.props; 
    MarketUIActions.getSelectedDate(selectedDateParam);  
    this.handleSelect(selectedDateParam);
  }

  handleAllDate = () => {
    const {MarketActions,MarketUIActions} = this.props;
    MarketUIActions.saveDate('undefined');
    MarketActions.getMarketList('Y');
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

  selectByDate = () => {
    const { MarketUIActions, isSelectedByDate } = this.props;
    MarketUIActions.selectByDate(isSelectedByDate);
  }

  render() {
    const {loading,today,currentDate,selectedDate,isSelectedByDate} = this.props;
    const {handleSelectDate,HandlePrevMonth,HandleNextMonth,HandlePrevDay,HandleNextDay,handleAllDate} = this;
    
    const dateFormat_Y = "YYYY";
    const dateFormat_M = "M";
    const dateFormat_D = "D";
    const dateFormat_d = "ddd";
  
    const curMonth = dateFns.format(selectedDate,dateFormat_M);
    const curYear = dateFns.format(selectedDate,dateFormat_Y);
    const curDay = dateFns.format(selectedDate,dateFormat_D);

    let daysInWeekList = [];
 
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
      <Fragment>
        <Calendar 
          curYear={curYear} 
          curMonth={curMonth} 
          curDay={curDay} 
          daysInWeekList={daysInWeekList} 
          onPrevMonth={HandlePrevMonth} 
          onNextMonth={HandleNextMonth} 
          onPrevDay={HandlePrevDay} 
          onNextDay={HandleNextDay}
          onSelectDate={handleSelectDate}
          onAllDate={handleAllDate}  
        />
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    selectedDate: state.marketUI.getIn(['calendar','selectedDate']),
    currentDate: state.marketUI.getIn(['calendar','currentDate']),
    today: state.marketUI.getIn(['calendar','today']),
    isSelectedByDate: state.marketUI.get('isSelectedByDate'),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketUIActions: bindActionCreators(marketUIActions,dispatch),
    MarketActions: bindActionCreators(marketActions,dispatch)
  })
)(CalendarContainer);