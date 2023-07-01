import {
  UPDATE_PRODUCTS,
  FETCH_PRODUCTS_REQUEST,
  ERROR,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants/productConstants";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

const productReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      const id = action.payload;
      const newArray = state.products.filter(
        (item) => item._id !== id
      );
      return {
        ...state,
        products: newArray,
        loading: false,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          action.payload,
        ],
        loading: false,
      };
    case UPDATE_PRODUCT:
      const updatedProduct = action.payload;
      const index = (state.products).findIndex(
        (obj) => obj._id === updatedProduct._id
      );
      console.log(index);
      const updatedArray = [...state.products];
      if (index !== -1) {
        updatedArray[index] = updatedProduct;
      }
      return {
        ...state,
        products: updatedArray,
        loading: false,
      };
    default:
  }
  return state;
};

export default productReducer;
