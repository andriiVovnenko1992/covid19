import React, { useEffect } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from './actionCreators';
import { selectAllStatistics, selectLoadStatistics, selectStatisticAllCountries, selectSummaryStatistic } from './selectors';
import Header from "./components/header";
import Table from "./components/table";
import Input from "./components/input";
import Spinner from "./components/spinner";

const App = ({ getAllStatisticsActionCreator, loadStatistics, summaryStatistic, allCountriesStatistics, changeInputStringActionCreator }) => {

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
              <Input func={changeInputStringActionCreator}/>
              <Table  statistics={allCountriesStatistics}/>
            </div>
        )
      }
        </>
  )
};

const mapStateToProps = (state) => {
  const sortedStatistic = selectAllStatistics(state);
  return {
    summaryStatistic: selectSummaryStatistic(sortedStatistic),
    allCountriesStatistics: selectStatisticAllCountries(state ,sortedStatistic),
    loadStatistics: selectLoadStatistics(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
