import {
  SET_CATEGORY,
  SET_SORT_BY,
  SET_PRICE,
  CLEAR_FILTERS,
} from "../constants/filterConstants";

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};

export const setSortBy = (sortBy) => {
  return {
    type: SET_SORT_BY,
    payload: sortBy,
  };
};

export const setPrice = (price) => {
  return {
    type: SET_PRICE,
    payload: price,
  };
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
  };
};
