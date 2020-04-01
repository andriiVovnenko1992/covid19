import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import { FETCH_COUNTRIES, FETCH_STATISTICS } from './constants';
//import { fetchData } from './helpers/fetchData';
import loadAllStatistics from "./reducers/loadAllStatisticsReducer";
import allStatistics from "./reducers/statisticsReducer";
import inputString from './reducers/inputStringReducer';
import country from "./reducers/oneCountryStatisticsReducer";
import loadCountry from "./reducers/loadCountryReducer";
import CountryPage from "./components/countryPage/countryPage";

const store = createStore(combineReducers({
    loadAllStatistics,
    allStatistics,
    inputString,
    country,
    loadCountry,
}), applyMiddleware(thunkMiddleware, promiseMiddleware));


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/country/:country' component={CountryPage} />
                <Route path='/' exact component={App} />
            </Switch>
        </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
