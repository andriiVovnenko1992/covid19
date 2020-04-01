import {CHANGE_INPUT_STRING} from "../constants";

const initState = '';

export default (state = initState, action) => {
  if(action.type === CHANGE_INPUT_STRING) {
      return action.payload;
  }
  return state;
};
