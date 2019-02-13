const INITIAL_STATE = {
  month: "",
  income: 0,
  expenses: 0
};

const actionTypes = {
  ADD_CURRENT_MONTH: "addCurrentMonth",
  UPDATE_CURRENT_MONTH: "updateCurrentMonth",
  CLEAR_MONTH_DATA: "clearData"
};

const currentMonth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_CURRENT_MONTH:
      return {
        month: action.payload.month,
        income: action.payload.income
      };

    case actionTypes.UPDATE_CURRENT_MONTH:
      return {
        month: action.payload.month,
        income: action.payload.income,
        expenses: action.payload.expenses
      };

    case actionTypes.CLEAR_MONTH_DATA:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default currentMonth;
