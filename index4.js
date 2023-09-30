// Complete counter app

const { createStore } = require("redux");

// state -> count : 0
// action -> increment,decrement,reset
// reducer
// store

// Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// state
const initialState = {
  count: 0,
};

// action
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};
const deccrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounterAction = () => {
  return {
    type: RESET,
  };
};

// CREATING REDUCER
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      break;
    case RESET:
      return {
        ...state,
        count: 0,
      };
      break;

    default:
      state;
  }
};

//Store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());

store.dispatch(resetCounterAction());

store.dispatch(deccrementCounterAction());
store.dispatch(deccrementCounterAction());
