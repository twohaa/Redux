// state
// dispatch action
// reducer
// store --> getState(),dispatch(),subscribe()

const { createStore } = require("redux");

// defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state
const initialCounterState = {
  count: 0,
};

// action -->Object-->type,payload
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
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

    default:
      state;
  }
};

//create store
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// //dispatch action
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());

store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());


