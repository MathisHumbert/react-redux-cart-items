import {
  CLEAR_CART,
  GET_PRODUCTS,
  GET_TOTALS,
  REMOVE_PRODUCT,
  TOGGLE_AMOUNT,
} from './actions';
import { combineReducers } from 'redux';
import data from './data';

const initialState = {
  cart: data,
  loading: false,
  amount: 0,
  price: 0,
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_PRODUCTS) {
    return { ...state, products: action.payload };
  }
  if (action.type === REMOVE_PRODUCT) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_AMOUNT) {
    const { type, id, amount } = action.payload;

    if (type === 'dec' && amount === 1) {
      const tempCart = state.cart.filter((item) => item.id !== id);
      return { ...state, cart: tempCart };
    }

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (type === 'inc') {
          item.amount = item.amount + 1;
        } else {
          item.amount = item.amount - 1;
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === GET_TOTALS) {
    console.log('passed');
    let { amount, price } = state.cart.reduce(
      (acc, curr) => {
        acc.amount += curr.amount;
        acc.price += curr.amount * curr.price;
        return acc;
      },
      {
        amount: 0,
        price: 0,
      }
    );

    return { ...state, amount, price };
  }
  return state;
}

export default combineReducers({
  rootReducer,
});
