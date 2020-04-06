import React, {useEffect} from "react";
import { selectCountryName, selectLastStatisticsToCountry, selectCountryStatistics, selectLoadCountry } from './../../selectors';
import {connect} from "react-redux";
import Header from "../header";
import * as actions from './../../actionCreators';
import Spinner from "./../spinner";
import {bindActionCreators} from "redux";
import ChartComponent from "./chart";

const Container = ({children}) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-xl-10 m-auto">
                {children}
            </div>
        </div>
    </div>
);

const CountryPage = ({ lastStatistics, loadCountry, statistics, getCountryStatistics, countryName }) => {

    useEffect(() => {
        getCountryStatistics(countryName);
    },[])
    return (
        <>
            {
                (!loadCountry || !lastStatistics) ? <Spinner/> : (
                    <>
                    <Header statistic={lastStatistics} />
                    <Container children={< ChartComponent statistics={statistics}/>} />
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
