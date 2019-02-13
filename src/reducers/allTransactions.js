const INITIAL_STATE = [];

export const actionTypes = {
  ADD_TRANSACTION: "addTransaction",
  DELETE_TRANSACTION: "deleteTransaction",
  CLEAR_ALL_TRANSACTION: "clearTransactions"
};

const transactions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return [...state, action.payload];

    case actionTypes.DELETE_TRANSACTION:
      return [
        ...state.filter(transaction => transaction.id !== action.payload)
      ];

    case actionTypes.CLEAR_ALL_TRANSACTION:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default transactions;
