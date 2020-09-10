import { combineReducers } from "redux";
import callsReducer from './CallsReducer'

const reducers = combineReducers({
  calls: callsReducer
});

export default reducers;