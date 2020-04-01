import React, {useEffect, useState} from "react";
import { selectCountryName, selectLastStatisticsToCountry, selectCountryStatistics, selectLoadCountry } from './../../selectors';
import {connect} from "react-redux";
import Header from "../header";
import * as actions from './../../actionCreators';
import Spinner from "./../spinner";
import {bindActionCreators} from "redux";
import Chart from './../../../node_modules/chart.js/dist/Chart';
const CountryPage = ({ lastStatistics, loadCountry, statistics, getCountryStatistics, countryName }) => {

    useEffect(() => {
        getCountryStatistics(countryName);
    },[]);

    return (
        <>
            {
                (!loadCountry || !lastStatistics) ? <Spinner/> : (
                    <>
                    <Header statistic={lastStatistics} />
                    <div className="container">

                    </div>
                    </>
                )
            }
        </>
    )
};

const mapStateToProps = (state, { match }) => {
    const countryName = selectCountryName(match);
    return {
        loadCountry: selectLoadCountry(state),
        statistics: selectCountryStatistics(state),
        lastStatistics: selectLastStatisticsToCountry(state, countryName),
        countryName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryPage);
