import {
  UPDATE_CART,
  ERROR,
  CART_REQUEST,
  SET_ID,
} from "../constants/cartConstants";

const initialState = {
  id: "",
  cart: [],
  loading: false,
  error: "",
};

const userReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      break;
  }
  return state;
};

export default userReducer;
