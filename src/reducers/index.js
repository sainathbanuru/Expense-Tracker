import { combineReducers } from "redux";
import previous from "./previous";
import transactions from "./allTransactions";
import currentMonth from "./currentMonth";

export default combineReducers({
  previous,
  transactions,
  currentMonth
});
