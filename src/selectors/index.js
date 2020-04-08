import {sortByActive, objectWithConvertedDate, uniqByDate} from './../helpers';

export const selectCountryName = ({ params }) => params.country;
export const selectLastStatisticsToCountry = (state, countryName) => state.allStatistics.filter(({country}) => country === countryName)[0];
export const selectAllStatistics = (state) => sortByActive(state.allStatistics);
export const selectLoadStatistics = (state) => state.loadAllStatistics;
export const selectLoadCountry = (state) => state.loadCountry;
export const selectCountryStatistics = (state) => uniqByDate(objectWithConvertedDate(state.country));
export const selectSummaryStatistic = (state) => {
    const [total] = selectAllStatistics(state);
    return total;
};
export const selectSortedString = (state) => state.inputString;
export const selectStatisticAllCountries = (state) => {
    const filterString = selectSortedString(state);
    const [, ...countryStatistic] = selectAllStatistics(state);
    return countryStatistic.filter(({ country }) => country.toLowerCase().includes(filterString.toLowerCase()));
};
