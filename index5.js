// payload 

const { createStore } = require("redux");

// Constant
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";

// state
const initialState = {
  count: 1,
  users: ["twoha"],
};

// action
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// CREATING REDUCER
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
      break;

    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
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


store.dispatch(addUser("Mahfuz"));
store.dispatch(addUser("rifat"));

store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(10));
