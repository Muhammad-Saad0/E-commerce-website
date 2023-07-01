import {
  SET_SORT_BY,
  SET_CATEGORY,
  SET_PRICE,
  CLEAR_FILTERS,
} from "../constants/filterConstants";

const initialState = {
  category: "All",
  price: 0,
  sortBy: "A-Z",
};

export const filterReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case CLEAR_FILTERS:
      return {
        price: 0,
        category: "All",
        sortBy: "",
      };

    default:
      break;
  }
  return state;
};
