import { GET_COUNTRY_STATISTICS_PENDING, GET_COUNTRY_STATISTICS_FULFILLED, GET_COUNTRY_STATISTICS_REJECTED } from './../constants';

export default (state = true, action) => {
    if (action.type === GET_COUNTRY_STATISTICS_PENDING) return false;
    if (action.type === GET_COUNTRY_STATISTICS_FULFILLED) return true;
    if (action.type === GET_COUNTRY_STATISTICS_REJECTED) return true;
    return state;
}
