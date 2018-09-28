import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Calendar from 'components/market/Calendar';
import dateFns from "date-fns";

import * as marketActions from 'store/modules/market';
import * as marketUIActions from 'store/modules/marketUI';

class CalendarContainer extends Component {

  HandleNextMonth = () => {
    const {MarketUIActions,currentDate} = this.props;
    const nextMonth = dateFns.addMonths(currentDate,1);
    MarketUIActions.nextMonth(nextMonth);
  }

  HandlePrevMonth = () => {
    const {MarketUIActions,currentDate} = this.props;
    const prevMonth = dateFns.subMonths(currentDate,1);
    MarketUIActions.prevMonth(prevMonth);
  }

  render() {
    const {loading,currentDate} = this.props;
    const {HandlePrevMonth,HandleNextMonth} = this;

    const startDate = dateFns.startOfMonth(currentDate);
    const endDate = dateFns.endOfMonth(currentDate);

    const day_length = dateFns.differenceInDays(endDate,startDate) + 1;

    const dateFormat_Y = "YYYY";
    const dateFormat_M = "M";
    const dateFormat_D = "D";
    const dateFormat_d = "ddd";

    const curMonth = dateFns.format(currentDate,dateFormat_M);
    const curYear = dateFns.format(currentDate,dateFormat_Y);

    let dayList = [];

    for(let i = 0; i< day_length; i++){
      const weekday = dateFns.format(dateFns.addDays(startDate,i),dateFormat_d)
      const day = dateFns.format(dateFns.addDays(startDate,i),dateFormat_D)
      dayList.push({day,weekday})
    }
    
    if(loading) return null;
    return (
      <div>
        <Calendar curYear={curYear} curMonth={curMonth} dayList={dayList} onPrevMonth={HandlePrevMonth} onNextMonth={HandleNextMonth}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    currentDate: state.marketUI.getIn(['calendar','currentDate']),
    loading: state.pender.pending['market/GET_MARKET_LIST']
  }),
  (dispatch) => ({
    MarketUIActions: bindActionCreators(marketUIActions,dispatch),
    MarketActions: bindActionCreators(marketActions,dispatch)
  })
)(CalendarContainer);