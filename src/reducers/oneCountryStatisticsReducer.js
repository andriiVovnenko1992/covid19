import { GET_COUNTRY_STATISTICS_FULFILLED } from "../constants";

const initState = [];

export default (state = initState, action) => {
    if(action.type === GET_COUNTRY_STATISTICS_FULFILLED) {
        return action.payload;
    }
    return state;
}
