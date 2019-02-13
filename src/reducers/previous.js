const INITIAL_STATE = [];

export const actionsTypes = {
  ADD_MONTH: "addMonth"
};

const previousMonths = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_MONTH:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default previousMonths;
