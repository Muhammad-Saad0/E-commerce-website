import {
  UPDATE_PRODUCTS,
  FETCH_PRODUCTS_REQUEST,
  ERROR,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants/productConstants";
import axios from "../../axios/axios";

const productRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

const updateProducts = (products) => {
  return {
    type: UPDATE_PRODUCTS,
    payload: products,
  };
};

const Error = (error) => {
  return {
    type: ERROR,
    payload: error,
  };
};

const deleteProductById = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const updateProductById = (
  updatedProduct
) => {
  return {
    type: UPDATE_PRODUCT,
    payload: updatedProduct,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(productRequest());
    try {
      const products = await axios.get(
        "/fetch-products"
      );
      dispatch(updateProducts(products.data));
    } catch (error) {
      dispatch(Error(error));
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(productRequest());
    try {
      await axios.post(`/delete-product${id}`);
      dispatch(deleteProductById(id));
    } catch (error) {
      dispatch(Error(error));
    }
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    dispatch(productRequest());
    try {
      await axios.post("/add-product", product);
      dispatch(fetchProducts());
    } catch (error) {
      dispatch(Error(error));
    }
  };
};

export const updateProduct = (
  productData,
  id
) => {
  return async (dispatch) => {
    dispatch(productRequest());
    try {
      await axios.post(`/update-product/${id}`, {
        productData,
      });
      dispatch(updateProductById(productData));
    } catch (error) {}
  };
};
