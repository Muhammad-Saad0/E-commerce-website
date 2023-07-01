import {
  CART_REQUEST,
  UPDATE_CART,
  ERROR,
} from "../constants/cartConstants";
import axios from "../../axios/axios";

const cartRequest = () => {
  return {
    type: CART_REQUEST,
  };
};

export const updateCart = (cart) => {
  return {
    type: UPDATE_CART,
    payload: cart,
  };
};

const cartError = (error) => {
  return {
    type: ERROR,
    payload: error,
  };
};
