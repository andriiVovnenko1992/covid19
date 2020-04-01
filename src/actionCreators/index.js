import { GET_ALL_STATISTICS, CHANGE_INPUT_STRING, GET_COUNTRY_STATISTICS} from './../constants';
import { fetchAllStatistics, fetchOneCountry } from './../helpers/fetchData';

export const changeInputStringActionCreator = (str) => ({type: CHANGE_INPUT_STRING, payload: str});
export const getCountryStatistics = (country) => ({ type: GET_COUNTRY_STATISTICS, payload: fetchOneCountry(country)});
export const getAllStatisticsActionCreator = () => ({ type: GET_ALL_STATISTICS, payload: fetchAllStatistics()});
