import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const CLEAR_CART = 'CLEAR_CART';
const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';
const GET_TOTALS = 'GET_TOTALS';

const url = 'https://course-api.com/react-useReducer-cart-project';

const getProducts = () => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        dispatch({ type: GET_PRODUCTS, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const removeProduct = (id) => {
  return (dispatch) => {
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  };
};

const clearCart = () => {
  return (dispatch) => dispatch({ type: CLEAR_CART });
};

const toggleAmount = (id, type, amount) => {
  return (dispatch) =>
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, type, amount } });
};

const getTotals = () => {
  return (dispatch) => dispatch({ type: GET_TOTALS });
};

export {
  GET_PRODUCTS,
  getProducts,
  REMOVE_PRODUCT,
  removeProduct,
  CLEAR_CART,
  clearCart,
  TOGGLE_AMOUNT,
  toggleAmount,
  GET_TOTALS,
  getTotals,
};
