import {
  ADD_TO_CART,
  REMOVE_CART,
  REMOVE_CART_ALL,
  USER_LOGEDIN,
  ADD_FAV,
  INCREMENT_CART,
  RMV_ONE,
  DETAILS_PRODUCT,
} from "../Constants/ActionType";


//login user navigate
export const userlogin = (data) => {
  return {
    type: USER_LOGEDIN,
    payload:data
  };
};

//increment one item cart
export const incrementCounter = (data) => {
  console.log(data, "action datas");
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

// Product Details
export const ProductDetails = (data) => {
  return {
    type: DETAILS_PRODUCT,
    payload: data,
  };
};

export const incrementCartProduct = (data) => {
  return {
    type: INCREMENT_CART,
    payload: data,
  };
};
//remove one item
export const decrementCounter = (data) => {
  return {
    type: REMOVE_CART,
    payload: data,
  };
};

//remove all item
export const decrementCounterALL = () => {
  return {
    type: REMOVE_CART_ALL,
  };
};


//fav icon increment
export const incrementFav = () => {
  return {
    type: ADD_FAV,
  };
};

// remove individual iteam

export const REMOVE = (iteam) => {
  return {
    type: "RMV_ONE",
    payload: iteam,
  };
};
