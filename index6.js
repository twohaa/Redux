// multiple reducer(product & cart)

//product
const { createStore, combineReducers } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
      break;
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
      break;

    default:
      return state;
  }
};

//cart
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

const initialCartState = {
  cart: ["sugar"],
  numberOfCart: 1,
};

const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCart = (cart) => {
  return {
    type: ADD_CART_ITEM,
    payload: cart,
  };
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
      break;
    case ADD_CART_ITEM:
      return {
        cart: [...state.cart, action.payload],
        numberOfCart: state.numberOfCart + 1,
      };
      break;

    default:
      return state;
  }
};

//combined reducer
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("pen"));

store.dispatch(getCart());
store.dispatch(addCart("pen"));
