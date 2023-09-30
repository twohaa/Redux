// state 
// dispatch action 
// reducer 

// defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state
const initialCounterState = {
  count: 0,
  //   users: "",
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