import React, { useEffect } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from './actionCreators';
import {
  selectAllStatistics, selectLoadStatistics, selectStatisticAllCountries, selectSummaryStatistic,
  selectSortedString,
} from './selectors';
import Header from "./components/header";
import Table from "./components/table";
import Input from "./components/input";
import Spinner from "./components/spinner";

const App = ({
               getAllStatisticsActionCreator, loadStatistics, summaryStatistic,
               allCountriesStatistics, changeInputStringActionCreator,
               filterString
}) => {

  useEffect(() => {
    if(!allCountriesStatistics || !allCountriesStatistics.length) getAllStatisticsActionCreator();
  }, []);
  console.log('app')
  return (
      <>
      {
        !loadStatistics || !summaryStatistic ? (<Spinner/>) : (
            <div>
              <Header statistic={summaryStatistic}/>
              <Input changeFilter={changeInputStringActionCreator} filterString={filterString}/>
              <Table  statistics={allCountriesStatistics}/>
            </div>
        )
      }
        </>
  )
};

const mapStateToProps = (state) => {
  return {
    summaryStatistic: selectSummaryStatistic(state),
    allCountriesStatistics: selectStatisticAllCountries(state),
    loadStatistics: selectLoadStatistics(state),
    filterString: selectSortedString(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
