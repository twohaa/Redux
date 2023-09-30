// state 
// dispatch action 

// defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
  count: 0,
};
const initialUserState = {
  user: [{ name: "twoha" }],
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

const addUser1 = () => {
  return {
    type: ADD_USER,
    payload: { name: "Mahfuz" },
  };
};
const addUser2 = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
