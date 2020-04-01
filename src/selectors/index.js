import {sortByActive} from './../helpers';
import country from "../reducers/oneCountryStatisticsReducer";

export const selectCountryName = ({ params }) => params.country;
export const selectLastStatisticsToCountry = (state, countryName) => state.allStatistics.filter(({country}) => country === countryName)[0];
export const selectAllStatistics = (state) => sortByActive(state.allStatistics);
export const selectLoadStatistics = (state) => state.loadAllStatistics;
export const selectLoadCountry = (state) => state.loadCountry;
export const selectCountryStatistics = (state) => state.country;
export const selectSummaryStatistic = (sortedStatistic) => sortedStatistic[0];
export const selectSortedString = (state) => state.inputString;
export const selectStatisticAllCountries = (state, sortedStatistic) => {
    const string = selectSortedString(state);
    return sortedStatistic.filter(({ country }) => country.toLowerCase().includes(string.toLowerCase()) && country !== 'All');
};
